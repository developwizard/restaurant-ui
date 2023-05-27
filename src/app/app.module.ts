import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RestaurantDashboardComponent} from './restaurant-dashboard/restaurant-dashboard.component';
import {BsModalService} from "ngx-bootstrap/modal";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RestaurantDashboardComponent
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
