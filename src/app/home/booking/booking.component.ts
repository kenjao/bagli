import {Component, HostListener, OnInit} from '@angular/core';
import {isNullOrUndefined} from "util";
import {StripeCheckoutHandler, StripeCheckoutLoader} from "ng-stripe-checkout";
import {environment} from "../../../environments/environment";
import {BookingService} from "./booking.service";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  dropOffLocation;
  fullname: string;
  phonenumber: string;
  email: string;
  dropOffTime;
  dropOffMeridian;
  enablePayment = false;
  amount = 100;
  stripeCheckoutHandler: StripeCheckoutHandler;


  constructor(private stripeCheckoutLoader: StripeCheckoutLoader, private bookingService: BookingService) { }


  ngOnInit() {
  }

  submitBooking() {
      if (confirm("Confirm you want to proceed")) {
        this.enablePayment = true;
        this.openToMakePayment();
      }
  }

  public setupPayment() {
    this.stripeCheckoutLoader.createHandler({
      key: environment.pkey,
      image: 'assets/images/logo/bagli-logo.png',
      token: (token) => {
        // Do something with the token...
        console.log('Charge request!', JSON.stringify(token.id));
        this.makePayment(token.id);
      }
    }).then((handler: StripeCheckoutHandler) => {
      this.stripeCheckoutHandler = handler;
    });
  }

  public openToMakePayment() {

    if(isNullOrUndefined(this.stripeCheckoutHandler)) {
      this.setupPayment();
      return;
    }
    this.stripeCheckoutHandler.open({
      name: this.fullname,
      email: this.email,
      amount: this.amount * 100,
      currency: 'USD',
    });
  }

  public onClickCancel() {
    // If the window has been opened, this is how you can close it:
    this.stripeCheckoutHandler.close();
  }

  @HostListener('window:popstate')
  onPopstate() {
    this.stripeCheckoutHandler.close();
  }


  makePayment(token: any) {
    // alert("Payment called \n " + JSON.stringify(token));
    console.log(token);
    this.bookingService.charge(token).subscribe(response => {
      console.log(JSON.stringify(response));
      alert("Successful");
    }, err => {
      alert(JSON.stringify(err.error.error.message));
    });

  }



}
