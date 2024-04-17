import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TransactionService } from 'src/app/admin/services/transaction.service';
import { TTransactionsComponent } from 'src/app/tabs/t-transactions/t-transactions.component';

@Component({
  selector: 'app-tellers-transactions',
  templateUrl: './tellers-transactions.component.html',
  styleUrls: ['./tellers-transactions.component.css']
})
export class TellersTransactionsComponent implements OnInit {
transactions: any;

  constructor(private dialog : MatDialog, private http: TransactionService){}

  ngOnInit(): void {
  }
  viewTransactions(data: any) {
    this.dialog.open(TTransactionsComponent, {
      width: '90%', 
      height: '60%', 
      
      position: {
        right: '2px'
      },
      panelClass: 'custom-dialog-container', // Custom CSS class for additional styling
      data: {
        transactions: data
      }
    });
  }
  
}
