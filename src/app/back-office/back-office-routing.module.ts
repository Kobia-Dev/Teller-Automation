import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReferralsComponent } from './referrals/referrals.component';
import { AddTellerComponent } from './add-teller/add-teller.component';
import { ReplenishComponent } from './replenish/replenish.component';
import {MatInputModule} from '@angular/material/input';
import { ViewGlsComponent } from '../tabs/view-gls/view-gls.component';
import { AllReferralsComponent } from '../tabs/all-referrals/all-referrals.component';
import { CustomerDetailsComponent } from '../tabs/customer-details/customer-details.component';

const routes: Routes = [
  {path:'', component: AllReferralsComponent},
  {path:'referrals', component: ReferralsComponent},
  {path:'add-teller', component: AddTellerComponent},
  {path:'replenish', component: ReplenishComponent},
  {path:'view-gls', component: ViewGlsComponent},
  {path:'all-referrals', component: AllReferralsComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackOfficeRoutingModule { }
