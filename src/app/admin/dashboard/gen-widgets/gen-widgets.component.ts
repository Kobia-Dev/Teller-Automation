import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';

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

  gls: any[] = [];
  glsCount: number = 0;

  constructor(
    private tellerservice: TransactionService,
    private withdrawalService: TransactionService,
    private depositsService: TransactionService    

  ) { }

  ngOnInit(): void {
    this.getTellers();
    this.getAllTransactions();
    this.getAllGls();
  }
  private getTellers() {
    this.tellerservice.getAllTellers().subscribe({
      next: ((response) => {
        this.tellers = response.entity;
        this.tellersCount = this.tellers.length;
      }),
      error: ((error) => {
        console.log("Error fetching tellers", error);
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
        console.log("Error fetching transactions", error);
      }),
      complete: (() => { })
    })
  }

  private getAllGls() {
    this.depositsService.getAllGls().subscribe({
      next: ((response) => {
        this.gls = response.entity;
        this.glsCount = this.gls.length;
      }),
      error: ((error) => {
        console.log("Error fetching transactions", error);
      }),
      complete: (() => { })
    })
  }

}
