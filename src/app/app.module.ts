import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material';
import { HttpClientModule } from  '@angular/common/http';
import { MaterialModule } from './material.module';
import { ProfileModule } from './profile/profile.module';
import { EventModule } from './event/event.module';
import { EventdetailsModule } from './eventdetails/eventdetails.module';
import {
  EmailValidator,
  PhoneValidator
} from './validators';

import {SignupService} from './services/signup.service'
import {SpinnerService} from './services/spinner.service'
const NGA_VALIDATORS = [
  EmailValidator,
  PhoneValidator
];

const APP_PROVIDERS = [
  SignupService,SpinnerService
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MaterialModule,
    ProfileModule,
    EventModule,
    EventdetailsModule,
    BrowserAnimationsModule
  ],
  providers: [...NGA_VALIDATORS,SignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
