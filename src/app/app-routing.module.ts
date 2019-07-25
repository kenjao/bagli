import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { BookingComponent } from './home/booking/booking.component';

const routes: Routes = [
  { path: 'home', loadChildren: './home/landing/landing.module#LandingModule' },
  { path: 'book', component: BookingComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [],
  providers: [{ provide: APP_BASE_HREF, useValue: '/bagli' }]
})
export class AppRoutingModule { }
