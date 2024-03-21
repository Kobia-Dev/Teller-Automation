import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from 'src/app/shared/components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { RtgsComponent } from 'src/app/tabs/rtgs/rtgs.component';
import { CustomerTransactionsComponent } from './customer-transactions/customer-transactions.component';
import { GenWidgetsComponent } from './gen-widgets/gen-widgets.component';
import { ActorsComponent } from './actors/actors.component';
import { ActorPerRegionComponent } from './actor-per-region/actor-per-region.component';
import { MixedTransactionsBarComponent } from './mixed-transactions-bar/mixed-transactions-bar.component';

@NgModule({
  declarations: [ 
   DashboardViewComponent, CustomerTransactionsComponent, GenWidgetsComponent, ActorsComponent, ActorPerRegionComponent, MixedTransactionsBarComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ComponentsModule,
    SharedModule,
    MatCardModule,
    NgApexchartsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
  ]
})
export class DashboardModule { }
