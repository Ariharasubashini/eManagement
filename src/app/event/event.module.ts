import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventRoutingModule } from './event-routing.module';
import { CreateeventComponent } from './createevent/createevent.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './nav/nav.component';
import { MyeventsComponent } from './myevents/myevents.component';




@NgModule({
  declarations: [
    CreateeventComponent,
    NavComponent,
    MyeventsComponent, 
  ],
  imports: [
    CommonModule,
    EventRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
})
export class EventModule { }

