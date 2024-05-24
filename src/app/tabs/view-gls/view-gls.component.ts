import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TransactionService } from 'src/app/admin/services/transaction.service';

export interface GlData {
  id: string;
  name: string;
  accno: number;
  balance: number;
}
@Component({
  selector: 'app-view-gls',
  templateUrl: './view-gls.component.html',
  styleUrls: ['./view-gls.component.css']
})
export class ViewGlsComponent implements OnInit {
  [x: string]: any;
  displayedColumns: string[] = ['id', 'name', 'accno', 'balance'];
  dataSource: MatTableDataSource<GlData>;
  gls: any;

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    // @Inject(MAT_DIALOG_DATA) private data,
    // private matref:MatDialogRef<ViewGlsComponent>,
   private glsService:TransactionService,
   private snackBar: MatSnackBar
   ) {}

    
  ngOnInit(): void {
    this.gls = this.data.data  
    this.getAllGls()
     
  }

  applyFilter(event: Event) {
    
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  getAllGls(): void { 
    this.glsService.getAllGls().subscribe({
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

  // dialogClose(){
  //   this.matref.close()
  // }

}
