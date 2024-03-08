import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReferralsComponent } from './referrals/referrals.component';
import { AddTellerComponent } from './add-teller/add-teller.component';
import { ModifyTellerComponent } from './modify-teller/modify-teller.component';

const routes: Routes = [
  {path:'', component: ReferralsComponent},
  {path:'referrals', component: ReferralsComponent},
  {path:'add-teller', component: AddTellerComponent},
  {path:'modify-teller', component: ModifyTellerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackOfficeRoutingModule { }
