import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from './landing.component';

const routes: Routes = [
  {
    path: "", component: LandingComponent, children : [
      {path: "", component: LandingComponent}
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: []
})
export class LandingRoutingModule { }
