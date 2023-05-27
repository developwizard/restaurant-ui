import {Component, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService, ModalModule} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-restaurant-dashboard',
  templateUrl: './restaurant-dashboard.component.html',
  styleUrls: ['./restaurant-dashboard.component.css'],
  standalone: true,
  imports: [ModalModule]
})
export class RestaurantDashboardComponent {
  modalRef?: BsModalRef;

  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
