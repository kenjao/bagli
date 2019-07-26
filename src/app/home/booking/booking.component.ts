import {Component, HostListener, OnInit} from '@angular/core';
import {isNullOrUndefined} from "util";
import {StripeCheckoutHandler, StripeCheckoutLoader} from "ng-stripe-checkout";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  fullname: string;
  phonenumber: string;
  email: string;
  dropOffTime = '9';
  dropOffMeridian = 'AM';
  enablePayment = false;
  amount = 100;
  stripeCheckoutHandler: StripeCheckoutHandler;


  constructor(private stripeCheckoutLoader: StripeCheckoutLoader) { }


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
        console.log('Charge request!', JSON.stringify(token));
        this.makePayment(token);
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
    alert("Card ready to be debited!");

  }



}
