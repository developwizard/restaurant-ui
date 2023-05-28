import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService, ModalModule} from "ngx-bootstrap/modal";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {ApiService} from "../shared/api";
import {RestaurantData} from "./restaurant.model";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-restaurant-dashboard',
  templateUrl: './restaurant-dashboard.component.html',
  styleUrls: ['./restaurant-dashboard.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    ModalModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class RestaurantDashboardComponent implements OnInit {
  modalRef?: BsModalRef;
  formValue!: FormGroup;
  showAdd!: boolean;
  showUpdate!: boolean;
  restaurantModelObj: RestaurantData = new RestaurantData();
  allRestaurantsData: RestaurantData[] = [];

  constructor(private modalService: BsModalService,
              private formBuilder: FormBuilder,
              private api: ApiService) {
  }

  openModal(template: TemplateRef<any>) {
    this.onAddRestaurantClick();
    this.modalRef = this.modalService.show(template);
  }

  openModalInEditMode(template: TemplateRef<any>, data: RestaurantData) {
    this.showAdd = false;
    this.showUpdate = true;
    this.restaurantModelObj.id = data.id;
    this.formValue.controls['name'].setValue(data.name);
    this.formValue.controls['email'].setValue(data.name);
    this.formValue.controls['mobile'].setValue(data.name);
    this.formValue.controls['address'].setValue(data.name);
    this.formValue.controls['services'].setValue(data.name);
    this.modalRef = this.modalService.show(template);
  }

  clearForms() {
    this.formValue.reset();
  }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: [''],
      email: [''],
      mobile: [''],
      address: [''],
      services: ['']
    });
    this.getAllData()
  }

  private setModelVal() {
    this.restaurantModelObj.name = this.formValue.value.name;
    this.restaurantModelObj.email = this.formValue.value.email;
    this.restaurantModelObj.mobile = this.formValue.value.mobile;
    this.restaurantModelObj.address = this.formValue.value.address;
    this.restaurantModelObj.services = this.formValue.value.services;
  }

  onAddRestaurantClick() {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  addRestaurant() {
    this.setModelVal();

    this.api.postRestaurant(this.restaurantModelObj).subscribe(res => {
        alert("Restaurant record added successfully");
        this.modalRef?.hide()
        this.formValue.reset();
        this.getAllData();
      },
      error => {
        alert("Something went wrong");
      });
  }

  getAllData() {
    this.api.getRestaurant().subscribe((res: RestaurantData[]) => {
      this.allRestaurantsData = res;
    })
  }

  deleteRestaurant(data: RestaurantData) {
    this.api.deleteRestaurant(data.id).subscribe((_) => {
      alert("Restaurant record deleted successfully");
      this.getAllData();
    })
  }

  updateRestaurant() {
    this.setModelVal();

    this.api.updateRestaurant(this.restaurantModelObj, this.restaurantModelObj.id)
      .subscribe((_) => {
        alert("Restaurant record updated");
        this.modalRef?.hide()
        this.formValue.reset();
        this.getAllData();
      })
  }
}
