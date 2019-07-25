import { Component, OnInit, ViewChild, ChangeDetectorRef, ElementRef, AfterViewInit , OnDestroy} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit, OnDestroy , AfterViewInit {

  fullname: string;
  phonenumber: string;
  email: string;
  dropOffTime = '9';
  dropOffMeridian = 'AM';
  enablePayment = false;

  @ViewChild('cardInfo') cardInfo: ElementRef;

  card: any;
  cardHandler = this.onChange.bind(this);
  error: string;
  constructor(private cd: ChangeDetectorRef) { }


  ngOnInit() {
  }

  submitBooking() {
      if(confirm("Confirm you want to proceed")) {
        this.enablePayment = true;
      }
  }

  ngAfterViewInit() {
    this.card = elements.create('card');
    this.card.mount(this.cardInfo.nativeElement);

    this.card.addEventListener('change', this.cardHandler);
  }

  ngOnDestroy() {
    this.card.removeEventListener('change', this.cardHandler);
    this.card.destroy();
  }

  onChange({ error }) {
    if (error) {
      this.error = error.message;
    } else {
      this.error = null;
    }
    this.cd.detectChanges();
  }

  async onSubmit(form: NgForm) {
    const { token, error } = await stripe.createToken(this.card);

    if (error) {
      alert('Something is wrong:');
    } else {
      alert('All set to process transaction!');
      // ...send the token to the your backend to process the charge
    }
  }

 

}
