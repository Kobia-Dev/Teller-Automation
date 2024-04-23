import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TransactionService } from 'src/app/admin/services/transaction.service';

export interface TransactionData {
  id: string;
  date: string;
  amount: string;
  teller_id: string;
  transactionId: string;
}

@Component({
  selector: 'app-t-transactions',
  templateUrl: './t-transactions.component.html',
  styleUrls: ['./t-transactions.component.css']
})
export class TTransactionsComponent implements OnInit {
  
  displayedColumns: string[] = ['id', 'amount', 'teller_id', 'transactionId', 'date', 'time'];
  dataSource: MatTableDataSource<TransactionData>;
transactions: any;
pageSizeOptions: number[] = [5, 10, 25];
pageSize: number = 5; // Number of tellers per page
pageIndex: number = 0;
totalItems: number = 0;

@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data,
    private matref:MatDialogRef<TTransactionsComponent>,
   
  ) {}

  ngOnInit(): void {
    this.transactions = this.data.data  
    this.dataSource = new MatTableDataSource(this.transactions);
   
    // console.log("hello", this.transactions);
     
  }
  
  ngAfterViewInit(): void{
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }




  pageChanged(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
  }

  

  // click() {
  //   this.router.navigate(['/back-office/modify-transaction']);
  // } 

  getDisplayedTransactions(): any[] {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.transactions.slice(startIndex, endIndex);
  }
  dialogClose(){
    this.matref.close()
  }
}
