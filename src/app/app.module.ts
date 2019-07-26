import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AlertModule} from "ngx-alerts";
import {SharedModule} from "./home/shared/shared.module";
import {AppRoutingModule} from "./app-routing.module";
import {StripeCheckoutModule} from "ng-stripe-checkout";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BookingComponent} from "./home/booking/booking.component";

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    StripeCheckoutModule,
    AlertModule.forRoot({maxMessages: 1, timeout: 5000})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
