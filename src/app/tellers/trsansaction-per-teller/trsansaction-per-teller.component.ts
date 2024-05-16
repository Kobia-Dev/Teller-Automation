import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TransactionService } from 'src/app/admin/services/transaction.service';

@Component({
  selector: 'app-trsansaction-per-teller',
  templateUrl: './trsansaction-per-teller.component.html',
  styleUrls: ['./trsansaction-per-teller.component.css']
})
export class TrsansactionPerTellerComponent implements OnInit {

  displayedColumns: string[] = ['transactionId', 'amount', 'date', 'transactionType', 'completed'];
  dataSource: any;
  data: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    private dialogRef: MatDialogRef<TrsansactionPerTellerComponent>,
    private transactionService: TransactionService
  ) { }

  ngOnInit(): void {
    this.data = this.dialogData.data;
    console.log(this.data);
    this.getTellerTransaction(this.dialogData.pfNumber); // Pass only the pfNumber property
  }
  
  getTellerTransaction(pfNumber: number): void { // Adjust the method signature to accept pfNumber
    this.transactionService.getTellerTransaction(pfNumber).subscribe((response: any) => {
      console.log(response);
      // Handle the response as needed
    });
  }
  

}
