import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TransactionService } from 'src/app/admin/services/transaction.service';
import { TTransactionsComponent } from 'src/app/tabs/t-transactions/t-transactions.component';


export interface TransactionData {
  id: string;
  date: string;
  amount: string;
  teller_id: string;
  transactionId: string;
}
@Component({
  selector: 'app-tellers-transactions',
  templateUrl: './tellers-transactions.component.html',
  styleUrls: ['./tellers-transactions.component.css']
})
export class TellersTransactionsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'amount', 'teller_id', 'transactionId', 'date', 'time'];
  dataSource: MatTableDataSource<TransactionData>;
transactions: any;
pageSizeOptions: number[] = [5, 10, 25];
pageSize: number = 5; // Number of tellers per page
pageIndex: number = 0;
totalItems: number = 0;

@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;

  constructor(private dialog : MatDialog, 
    private router: Router,
    private http: TransactionService){}

  viewTransactions(){
    const dialogRef:MatDialogRef<TTransactionsComponent> = this.dialog.open(TTransactionsComponent,{
      width: '90%', 
      height: '80%', 
      
      position: {
        right: '2px'
      },
      data:{
        data:this.transactions
      },
    
      
 
     })
     dialogRef.afterClosed().subscribe(
       ((res) =>{
         this.ngOnInit()
 
       }))
   }
 

  ngOnInit(): void {
    this.getAllTransactions()
  }
  applyFilter(event: Event) {
    
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  public getAllTransactions(): void { 
    this.http.getAllTransactions().subscribe({
      next: (response) => {
        
        if (response.statusCode === 200) {
         
          this.transactions = response.entity;
          this.totalItems = this.transactions.length;
          this.dataSource = new MatTableDataSource(this.transactions);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
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

  // viewTransactions(data: any) {
  //   this.dialog.open(TTransactionsComponent, {
  //     width: '90%', 
  //     height: '60%', 
      
  //     position: {
  //       right: '2px'
  //     },
  //     panelClass: 'custom-dialog-container', // Custom CSS class for additional styling
  //     data: {
  //       transactions: data
  //     }
  //   });
  // }
  
}

