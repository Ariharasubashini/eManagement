import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: '',   redirectTo: '/landing', pathMatch: 'full' },
  { path: 'profile', loadChildren: 'src/app/profile/profile.module#ProfileModule'},
  { path: 'eventHome', loadChildren: 'src/app/event/event.module#EventModule'},
  { path: 'eventdetails', loadChildren: 'src/app/eventdetails/eventdetails.module#EventdetailsModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
