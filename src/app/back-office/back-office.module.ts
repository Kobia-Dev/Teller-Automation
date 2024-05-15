import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { BackOfficeRoutingModule } from './back-office-routing.module';
import { ReferralsComponent } from './referrals/referrals.component';
import { AddTellerComponent } from './add-teller/add-teller.component';
import { ModifyTellerComponent } from './modify-teller/modify-teller.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReplenishComponent } from './replenish/replenish.component';

@NgModule({
  declarations: [
    ReferralsComponent,
    AddTellerComponent,
    ModifyTellerComponent,
    ReplenishComponent
  ],
  imports: [
    CommonModule,
    BackOfficeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule
  ]
})
export class BackOfficeModule { }
