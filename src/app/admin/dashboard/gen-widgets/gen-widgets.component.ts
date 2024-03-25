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

  withdrawals: any[] = [];
  withrawalsCount: number = 0;

  deposits: any[] = [];
  depositsCount: number = 0;

  constructor(
    private tellerservice: StaffService,
    private withdrawalService: StaffService,
    private depositsService: StaffService
    

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
      }),
      error: ((error) => {
        console.log("Error fetching agrodealers", error);
      }),
      complete: (() => { })
    })
  }
  private getAllTransactions() {
    this.withdrawalService.getAllTransactions().subscribe({
      next: ((response) => {
        this.transactions = response.entity;
        this.transactionsCount = this.transactions.length;
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
        this.withrawalsCount = this.withdrawals.length;
      }),
      error: ((error) => {
        console.log("Error fetching agrodealers", error);
      }),
      complete: (() => { })
    })
  }
  private getAllDeposits() {
    this.depositsService.getAllDeposits().subscribe({
      next: ((response) => {
        this.deposits = response.entity;
        this.depositsCount = this.deposits.length;
      }),
      error: ((error) => {
        console.log("Error fetching agrodealers", error);
      }),
      complete: (() => { })
    })
  }

}
