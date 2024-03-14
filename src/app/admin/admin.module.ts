import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DashboardViewComponent } from './dashboard/dashboard-view/dashboard-view.component';

@NgModule({
  declarations: [ 
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatSnackBarModule,
    HttpClientModule,

  ]
})
export class AdminModule { }