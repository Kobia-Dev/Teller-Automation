import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { TransactionService } from 'src/app/admin/services/transaction.service';
import { MatSort } from '@angular/material/sort';
import { Subject } from 'rxjs';
import { DataService } from 'src/app/admin/services/data.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

export interface TellerData {
  id: string;
  name: string;
  email: string;
  national_id: string;
  pfnumber: string;
  action: string;
}

@Component({
  selector: 'app-replenish',
  templateUrl: './replenish.component.html',
  styleUrls: ['./replenish.component.css']
})
export class ReplenishComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'email', 'national_id', 'pfnumber', 'action'];
  dataSource: MatTableDataSource<TellerData>;

  tellers: any[];
  pageSizeOptions: number[] = [5, 10, 25];
  pageSize: number = 5; // Number of tellers per page
  pageIndex: number = 0;
  totalItems: number = 0;

  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  isLoading = true;

  currentPage = 1;
  tellersPerPage = 5;
  destroy$: Subject<boolean> = new Subject<boolean>();
  teller_entity: any;
  teller_user: any;


  constructor(
    private tellerService: TransactionService,
    private router: Router,
    private dataService: DataService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAllTellers();
    
    // this.dataService.getUpdateData().subscribe(() => {
    //   this.getAllTellers();
  // });
  }

  applyFilter(event: Event) {
    
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnDestroy(): void{
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  
  public getAllTellers(): void {
    this.tellerService.getAllTellers().subscribe({
      next: (response) => {
        if (response.message === "All tellers retrieved successfully") {
          this.tellers = response.entity;
          this.totalItems = this.tellers.length;
          // Reset pageIndex to 0 to start from the first page
          this.pageIndex = 0;
          
          // Assigning the data to the MatTableDataSource
          this.dataSource = new MatTableDataSource(this.tellers);
          
          // Set the paginator and sort after assigning the data
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          
          this.isLoading = false;
        } else {
          // Handle other messages if needed
          console.error('Error', response.message);
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

 

  getDisplayedTellers(): any[] {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.tellers.slice(startIndex, endIndex);
  }
  public refresh(){
    this.getAllTellers();
  }
  // onViewClick(data:any) {
  //   this.dialog.open(ViewCriticalRoleComponent, {
  //     width:"80%",
  //     height:"65%",
  //     position:{
  //       right:"20px"
  //     },
  //     data:{
  //       criticalRole:data
  //     }

  //   })
  //   }
}
