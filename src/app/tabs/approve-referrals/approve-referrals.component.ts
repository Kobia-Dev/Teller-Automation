import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TransactionService } from 'src/app/admin/services/transaction.service';


export interface RefData {
  id: string;
  name: string;
  accno: number;
  balance: number;
}

@Component({
  selector: 'app-approve-referrals',
  templateUrl: './approve-referrals.component.html',
  styleUrls: ['./approve-referrals.component.css']
})
export class ApproveReferralsComponent implements OnInit {
 [x: string]: any;
  displayedColumns: string[] = ['id', 'name', 'accno', 'balance'];
  dataSource: MatTableDataSource<RefData>;
  referral: any;

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data,
    private matref:MatDialogRef<ApproveReferralsComponent>,
   private referralService:TransactionService,
   private snackBar: MatSnackBar
   ) {}

    
  ngOnInit(): void {
    this.referral = this.data.data  
    this.approveReferrals()
     
  }

  applyFilter(event: Event) {
    
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  approveReferrals(): void { 
    this.referralService.approveReferrals(this.referralId).subscribe({
      next: (response) => {
        console.log("1234", response);
         
          this.referral = response.entity;
          this.totalItems = this.referral.length;
          this.dataSource = new MatTableDataSource(response.entity);
          this.dataSource.sort = this.sort;
       
      },
      error: (error) => {
        this.snackBar.open(error.error.message, "Close", {duration: 3600, verticalPosition:'top'})
        console.error('Error', error);
      },
      complete: () => { }
    });
  }

  dialogClose(){
    this.matref.close()
  }

}

