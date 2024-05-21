import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TellersRoutingModule } from './tellers-routing.module';
import { TellerComponent } from './teller/teller.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';


import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import { TrsansactionPerTellerComponent } from './trsansaction-per-teller/trsansaction-per-teller.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';









@NgModule({
  declarations: [
    TellerComponent,
    TrsansactionPerTellerComponent
  ],
  imports: [
    CommonModule,
    TellersRoutingModule,
    MatPaginatorModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatTooltipModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule

  ]
})
export class TellersModule { }
