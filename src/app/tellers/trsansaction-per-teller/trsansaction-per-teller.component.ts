import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TransactionService } from 'src/app/admin/services/transaction.service';



export interface TellerData {
  transactionId: string;
  amount: number;
  date: string;
  transactionType: string;
  completed: boolean;
}

@Component({
  selector: 'app-trsansaction-per-teller',
  templateUrl: './trsansaction-per-teller.component.html',
  styleUrls: ['./trsansaction-per-teller.component.css']
})
export class TrsansactionPerTellerComponent implements OnInit {
  
  displayedColumns: string[] = ['transactionId', 'amount', 'date', 'transactionType', 'completed'];
  dataSource: MatTableDataSource<TellerData> = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  

  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    private dialogRef: MatDialogRef<TrsansactionPerTellerComponent>,
    private transactionService: TransactionService
  ) { }

  ngOnInit(): void {
    this.getTellerTransaction(this.dialogData.pfNumber);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  getTellerTransaction(pfNumber: number): void {
    this.transactionService.getTellerTransaction(pfNumber).subscribe((response: any) => {
      if (response && response.entity) {
        this.dataSource.data = response.entity;
      }
    });
  }
}
