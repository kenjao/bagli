import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AlertModule} from "ngx-alerts";
import {SharedModule} from "./home/shared/shared.module";
import {AppRoutingModule} from "./app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    AlertModule.forRoot({maxMessages: 1, timeout: 5000})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
