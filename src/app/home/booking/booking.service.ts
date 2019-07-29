

import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class BookingService {

  constructor(private httpClient: HttpClient) {

  }


  charge(token: string) {
    const params = new HttpParams()
      .set('amount', '10000')
      .set('currency', 'USD')
      .set('description', 'Booking Fee')
      .set('source', token)
      .set('statement_descriptor', 'Bagli Booking Fee');

      return this.httpClient.post("https://api.stripe.com/v1/charges", params.toString(), {headers: this.getChargeHeader()});
  }


  private getChargeHeader(): HttpHeaders {
    return new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": "Bearer sk_test_LUY9xubtvd6UdrYG2EXNksd2008SJ06On8"
    });
  }
}
