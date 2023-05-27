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

  getAllData() {
    this.api.getRestaurant().subscribe((res: RestaurantData[]) => {
      this.allRestaurantsData = res;
    })
  }
}
