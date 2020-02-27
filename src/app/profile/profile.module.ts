import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { AccountComponent } from "src/app/profile/account/account.component";
import { NavigationComponent } from './navigation/navigation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { TabaccountComponent } from './tabaccount/tabaccount.component';
import { ChangepwdComponent } from './changepwd/changepwd.component';
import { AddressComponent } from './address/address.component';
import { BankComponent } from './bank/bank.component';
import { CompanyComponent } from './company/company.component';


@NgModule({
  declarations: [
    AccountComponent,
    NavigationComponent,
    TabaccountComponent,
    ChangepwdComponent, 
    AddressComponent, BankComponent, CompanyComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ],

})
export class ProfileModule { }
