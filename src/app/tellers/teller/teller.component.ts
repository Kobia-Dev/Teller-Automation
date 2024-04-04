import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { TransactionService } from 'src/app/admin/services/transaction.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Subject } from 'rxjs';
import { DataService } from 'src/app/admin/services/data.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-teller',
  templateUrl: './teller.component.html',
  styleUrls: ['./teller.component.css']
})
export class TellerComponent implements OnInit {
  tellers: any[];
  pageSizeOptions: number[] = [5, 10, 25];
  pageSize: number = 5; // Number of tellers per page
  pageIndex: number = 0;
  totalItems: number = 0;

  dataSource: MatTableDataSource<any>;
  displayedColums: string[] = ['no', 'fullName', 'email', 'phoneNo', 'status', 'actions'];
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
    
    this.dataService.getUpdateData().subscribe(() => {
      this.getAllTellers();
  });
  }
  ngOnDestroy(): void{
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  
  public getAllTellers(): void { 
    this.tellerService.getAllTellers().subscribe({
      next: (response) => {
        if (response.statusCode === 200) {
          this.tellers = response.entity;
          this.totalItems = this.tellers.length;
          // Reset pageIndex to 0 to start from the first page
          this.pageIndex = 0;
          this.teller_user = response.entity.user;
          this.dataSource = new MatTableDataSource(this.teller_entity);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.isLoading = false;
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
    this.router.navigate(['/back-office/modify-teller']);
  } 

  getDisplayedTellers(): any[] {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.tellers.slice(startIndex, endIndex);
  }
  public refresh(){
    this.getAllTellers();
  }
  public applyFilter(event: any) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  public viewRecord(row : any) {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.disableClose = true
    dialogConfig.autoFocus = true
    dialogConfig.width = '600px'
    dialogConfig.data = { rowData: row}

    const dialogRef = this.dialog.open(TellerComponent, dialogConfig)

    dialogRef.afterClosed().subscribe( (result) => {
      console.log('closed')
    });
  }
  public deleteRecord(row : any) {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.disableClose = true
    dialogConfig.autoFocus = true
    dialogConfig.width = '600px'
    dialogConfig.data = { rowData: row}

    const dialogRef = this.dialog.open(TellerComponent, dialogConfig)

    dialogRef.afterClosed().subscribe( (result) => {
      console.log('closed')
    });
  }

  public deactivateRecord(row : any) {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.disableClose = true
    dialogConfig.autoFocus = true
    dialogConfig.width = '6009x'
    dialogConfig.data = { rowData : row}

    const dialogRef = this.dialog.open(TellerComponent, dialogConfig)

    dialogRef.afterClosed().subscribe( (result) => {
      console.log('close')
      if (result === 'deactivateConfirmed') {
        console.log('Deactivating record: ', row);
        this.getAllTellers();
      }
    })
  }
}
