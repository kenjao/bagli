import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import {LandingComponent} from './landing.component';
import {LandingRoutingModule} from './landing-routing.module';
import {CarouselModule} from "ngx-bootstrap";

@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    SharedModule,
    LandingRoutingModule,
    CarouselModule
  ],
  providers: [],
})
export class LandingModule {}
