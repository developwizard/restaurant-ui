import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService, ModalModule} from "ngx-bootstrap/modal";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {ApiService} from "../shared/api";
import {RestaurantData} from "./restaurant.model";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-restaurant-dashboard',
  templateUrl: './restaurant-dashboard.component.html',
  styleUrls: ['./restaurant-dashboard.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    ModalModule,
    ReactiveFormsModule
  ]
})
export class RestaurantDashboardComponent implements OnInit {
  modalRef?: BsModalRef;
  formValue!: FormGroup;
  restaurantModelObj: RestaurantData = new RestaurantData();
  allRestaurantsData: RestaurantData[] = [];

  constructor(private modalService: BsModalService,
              private formBuilder: FormBuilder,
              private api: ApiService) {
  }

  openModal(template: TemplateRef<any>) {
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
}
