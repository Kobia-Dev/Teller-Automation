import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TransactionService } from 'src/app/admin/services/transaction.service';

export interface AllGlData {
  id: string;
  referralId: string;
  referralType: number;
  amount: number;
  sourceAcc: number;
  destAcc: number;
  action:string;
}

@Component({
  selector: 'app-all-referrals',
  templateUrl: './all-referrals.component.html',
  styleUrls: ['./all-referrals.component.css']
})
export class AllReferralsComponent implements OnInit {
  [x: string]: any;
  displayedColumns: string[] = ['id', 'referralId', 'referralType', 'amount', 'sourceAcc', 'destAcc','action'];
  dataSource: MatTableDataSource<AllGlData>;
  gls: any;

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    // @Inject(MAT_DIALOG_DATA) private data,
    // private matref:MatDialogRef<AllReferralsComponent>,
   private glsService:TransactionService,
   private snackBar: MatSnackBar
   ) {}

    
  ngOnInit(): void {
    this.gls = this.data.data  
    this.getAllReferrals()
     
  }

  applyFilter(event: Event) {
    
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  getAllReferrals(): void { 
    this.glsService.getAllReferrals ().subscribe({
      next: (response) => {
        console.log("1234", response);
         
          this.gls = response.entity;
          this.totalItems = this.gls.length;
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

  handleApproveAction(referralId: string){
    
    console.log(referralId)
    this.glsService.approveReferrals(referralId).subscribe((response: any) => {
      console.log(response)
      if (response.entity && response.entity.id != null) {
        this.snackBar.open(response.message, "Close", {
          duration: 5000,
          horizontalPosition: 'end',
          verticalPosition: 'top',
          panelClass: 'snackbar-success'
        })
      }else if(response.entity == null && response.message) {
        this.snackBar.open(response.message, "Close", {
          duration: 5000,
          horizontalPosition: 'end',
          verticalPosition: 'top',
          panelClass: 'snackbar-warning'
        })
      }else {
        this.snackBar.open("The system is busy, kindly try again after two minutes.", "Close", {
          duration: 5000,
          horizontalPosition: 'end',
          verticalPosition: 'top',
          panelClass: 'snackbar-danger'
        });
      }
    }, (error) => {
      console.log(error);
      this.snackBar.open("The system is busy, try again after two minutes", "Close", {
        duration: 5000,
        horizontalPosition: 'end',
        verticalPosition: 'top',
        panelClass: 'snackbar-danger'
      });
    });
  }

  handleRejectAction(){

  }
}
