import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TellersRoutingModule } from './tellers-routing.module';
import { TellerComponent } from './teller/teller.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';




@NgModule({
  declarations: [
    TellerComponent
  ],
  imports: [
    CommonModule,
    TellersRoutingModule,
    MatPaginatorModule,
    MatDialogModule,
    MatIconModule
   
  //   MatIconModule,
  //   MatDialog,
  //   MatDialogConfig
  ]
})
export class TellersModule { }
