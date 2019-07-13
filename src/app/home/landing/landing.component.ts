import { Component, OnInit } from '@angular/core';
import {CarouselConfig} from "ngx-bootstrap";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 3000, noPause: true, showIndicators: true } }
  ]
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
