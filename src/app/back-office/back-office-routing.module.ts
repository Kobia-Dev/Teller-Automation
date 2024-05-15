import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReferralsComponent } from './referrals/referrals.component';
import { AddTellerComponent } from './add-teller/add-teller.component';
import { ReplenishComponent } from './replenish/replenish.component';
import {MatInputModule} from '@angular/material/input';

const routes: Routes = [
  {path:'', component: ReferralsComponent},
  {path:'referrals', component: ReferralsComponent},
  {path:'add-teller', component: AddTellerComponent},
  {path:'replenish', component: ReplenishComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackOfficeRoutingModule { }
