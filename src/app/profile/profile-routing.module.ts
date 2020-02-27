import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { TabaccountComponent } from './tabaccount/tabaccount.component';
import { BankComponent } from './bank/bank.component';
import { CompanyComponent } from './company/company.component';


const routes: Routes = [
  { path: '', component: NavigationComponent,
  children: [
    { path: 'account', component: TabaccountComponent},
    { path: 'bank', component: BankComponent},
    { path: 'company', component: CompanyComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
