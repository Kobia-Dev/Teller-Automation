import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackOfficeRoutingModule } from './back-office-routing.module';
import { ReferralsComponent } from './referrals/referrals.component';
import { AddTellerComponent } from './add-teller/add-teller.component';
import { ModifyTellerComponent } from './modify-teller/modify-teller.component';


@NgModule({
  declarations: [
    ReferralsComponent,
    AddTellerComponent,
    ModifyTellerComponent
  ],
  imports: [
    CommonModule,
    BackOfficeRoutingModule
  ]
})
export class BackOfficeModule { }
