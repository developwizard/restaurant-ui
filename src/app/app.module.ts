import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RestaurantDashboardComponent} from './restaurant-dashboard/restaurant-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantDashboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
