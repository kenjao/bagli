import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import {LandingComponent} from './landing.component';
import {LandingRoutingModule} from './landing-routing.module';
import {CarouselModule} from "ngx-bootstrap";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    SharedModule,
    LandingRoutingModule,
    CarouselModule,
    FormsModule
  ],
  providers: [],
})
export class LandingModule {}
