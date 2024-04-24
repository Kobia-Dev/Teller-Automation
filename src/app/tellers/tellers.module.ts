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







@NgModule({
  declarations: [
    TellerComponent
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
    MatTableModule   
  //   MatIconModule,
  //   MatDialog,
  //   MatDialogConfig
  ]
})
export class TellersModule { }
