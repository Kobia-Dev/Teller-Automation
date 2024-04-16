import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { TransactionService } from 'src/app/admin/services/transaction.service';

@Component({
  selector: 'app-t-transactions',
  templateUrl: './t-transactions.component.html',
  styleUrls: ['./t-transactions.component.css']
})
export class TTransactionsComponent implements OnInit {
  
applyFilter($event: any) {
throw new Error('Method not implemented.');
}

  transactions: any[];
  pageSizeOptions: number[] = [5, 10, 25];
  pageSize: number = 5; // Number of tellers per page
  pageIndex: number = 0;
  totalItems: number = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private transactionService: TransactionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllTransactions();
  }
  
  public getAllTransactions(): void { 
    this.transactionService.getAllTransactions().subscribe({
      next: (response) => {
        if (response.statusCode === 200) {
          this.transactions = response.entity;
          this.totalItems = this.transactions.length;
          // Reset pageIndex to 0 to start from the first page
          this.pageIndex = 0;
        } else {
          // Handle other status codes if needed
        }
      },
      error: (error) => {
        console.error('Error', error);
      },
      complete: () => { }
    });
  }

  pageChanged(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
  }

  

  click() {
    this.router.navigate(['/back-office/modify-transaction']);
  } 

  getDisplayedTransactions(): any[] {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.transactions.slice(startIndex, endIndex);
  }
}
