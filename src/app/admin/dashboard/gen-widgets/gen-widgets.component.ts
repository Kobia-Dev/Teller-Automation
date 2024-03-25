import { Component, OnInit } from '@angular/core';
import { StaffService } from '../../services/staff.service';

@Component({
  selector: 'app-gen-widgets',
  templateUrl: './gen-widgets.component.html',
  styleUrls: ['./gen-widgets.component.css']
})
export class GenWidgetsComponent implements OnInit {

  //public chartOptions: Partial<ChartTitleOptions>
  tellers: any[] = [];
  tellersCount: number = 0;

  transactions: any[] = [];
  transactionsCount: number = 0;

  constructor(
    private tellerservice: StaffService,
    private transactionservice: StaffService

  ) { }

  ngOnInit(): void {
    this.getTellers();
    this.getAllTransactions();
  }
  private getTellers() {
    this.tellerservice.getAllTellers().subscribe({
      next: ((response) => {
        this.tellers = response.entity;
        this.tellersCount = this.tellers.length;
        // this.renderCharts();
      }),
      error: ((error) => {
        console.log("Error fetching tellers", error);
      }),
      complete: (() => { })
    })
  }
  private getAllTransactions() {
    this.transactionservice.getAllTransactions().subscribe({
      next: ((response) => {
        this.transactions = response.entity;
        this.transactionsCount = this.transactions.length;
        // this.renderCharts();
      }),
      error: ((error) => {
        console.log("Error fetching transactions", error);
      }),
      complete: (() => { })
    })
  }

}
