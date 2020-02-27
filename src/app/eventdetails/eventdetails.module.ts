import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventdetailsRoutingModule } from './eventdetails-routing.module';
import { NaviComponent } from './navi/navi.component';
import { TicketComponent } from './ticket/ticket.component';
import { MaterialModule } from '../material.module';
import { CreateticketComponent } from './createticket/createticket.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [NaviComponent, TicketComponent, CreateticketComponent, DashboardComponent],
  imports: [
    CommonModule,
    EventdetailsRoutingModule,
    MaterialModule
  ]
})
export class EventdetailsModule { }
