import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService, ModalModule} from "ngx-bootstrap/modal";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-restaurant-dashboard',
  templateUrl: './restaurant-dashboard.component.html',
  styleUrls: ['./restaurant-dashboard.component.css'],
  standalone: true,
  imports: [ModalModule, ReactiveFormsModule]
})
export class RestaurantDashboardComponent implements OnInit {
  modalRef?: BsModalRef;
  formValue!: FormGroup;

  constructor(private modalService: BsModalService, private formBuilder: FormBuilder) {}

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
  }
}
