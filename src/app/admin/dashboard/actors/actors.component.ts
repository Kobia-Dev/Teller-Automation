import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartTitleOptions } from 'chart.js';
import { Series } from 'd3-shape';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {
  public chartOptions: Partial<ChartTitleOptions>
  tellers: any[] = [];
  tellersCount: number = 0;

  withdrawals: any[] = [];
  withdrawalsCount: number = 0;

  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['no', 'fullName', 'email', 'phoneNuo', 'status', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  isLoading = true;
  


  constructor(
    private tellerService: TransactionService,
    private withdrawalService: TransactionService
  ) { }

  ngOnInit(): void {
  }
  private getAllTellers() {
    this.tellerService.getAllTellers().subscribe({
      next: ((response) => {
        this.tellers = response.entity;
        this.tellersCount = this.tellers.length;
        // this.renderCharts();
      }),
      error: ((error) => {
        console.log("Error fetching agrodealers", error);
      }),
      complete: (() => { })
    })
  }
  private getAllWithdrawals() {
    this.withdrawalService.getAllWithdrawals().subscribe({
      next: ((response) => {
        this.withdrawals = response.entity;
        this.withdrawalsCount = this.tellers.length;
        // this.renderCharts();
      }),
      error: ((error) => {
        console.log("Error fetching agrodealers", error);
      }),
      complete: (() => { })
    })
  }

  
}
