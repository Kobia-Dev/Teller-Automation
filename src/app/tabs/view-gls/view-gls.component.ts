import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
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
    @Inject(MAT_DIALOG_DATA) private data,
    private matref:MatDialogRef<ViewGlsComponent>,
   private glsService:TransactionService
   ) {}

    
  ngOnInit(): void {
    this.gls = this.data.data  
    this.dataSource = new MatTableDataSource(this.gls);
   
    console.log("hello", this.gls);
     
  }

  ngAfterViewInit(): void{
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  getAllGls(): void { 
    this.glsService.getAllGls().subscribe({
      next: (response) => {
        
        if (response.statusCode === 200) {
         
          this.gls = response.entity;
          this.totalItems = this.gls.length;
          this.dataSource = new MatTableDataSource(this.gls);
          this.dataSource.sort = this.sort;
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

  dialogClose(){
    this.matref.close()
  }

}
