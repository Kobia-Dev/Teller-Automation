import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

import { BackOfficeRoutingModule } from './back-office-routing.module';
import { ReferralsComponent } from './referrals/referrals.component';
import { AddTellerComponent } from './add-teller/add-teller.component';
import { ModifyTellerComponent } from './modify-teller/modify-teller.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ReferralsComponent,
    AddTellerComponent,
    ModifyTellerComponent
  ],
  imports: [
    CommonModule,
    BackOfficeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class BackOfficeModule { }
