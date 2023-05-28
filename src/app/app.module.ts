import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RestaurantDashboardComponent} from './restaurant-dashboard/restaurant-dashboard.component';
import {BsModalService} from "ngx-bootstrap/modal";
import {HttpClientModule} from "@angular/common/http";
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent
  ],
    imports: [
      AppRoutingModule,
      BrowserModule,
      HttpClientModule,
      RestaurantDashboardComponent,
      RouterModule,
      SignupComponent
    ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
