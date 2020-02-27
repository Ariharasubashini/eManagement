import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NaviComponent } from './navi/navi.component';
import { TicketComponent } from './ticket/ticket.component';
import { CreateticketComponent } from './createticket/createticket.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path: '', component: NaviComponent,
  children: [
    {path:'', component: DashboardComponent},
    {path: 'ticket', component: TicketComponent},
    {path: 'createticket', component: CreateticketComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventdetailsRoutingModule { }
