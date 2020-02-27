import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateeventComponent } from './createevent/createevent.component';
import { NavComponent } from './nav/nav.component';
import { MyeventsComponent } from './myevents/myevents.component';


const routes: Routes = [
  { path: '', component: NavComponent,
 children: [
   {path: '', component: MyeventsComponent},
   {path: 'createevent', component: CreateeventComponent}
 ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
