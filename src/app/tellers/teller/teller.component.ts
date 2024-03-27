import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { TransactionService } from 'src/app/admin/services/transaction.service';

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

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private tellerService: TransactionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllTellers();
  }
  
  public getAllTellers(): void { 
    this.tellerService.getAllTellers().subscribe({
      next: (response) => {
        if (response.statusCode === 200) {
          this.tellers = response.entity;
          this.totalItems = this.tellers.length;
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
    this.router.navigate(['/back-office/modify-teller']);
  } 

  getDisplayedTellers(): any[] {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.tellers.slice(startIndex, endIndex);
  }
}
