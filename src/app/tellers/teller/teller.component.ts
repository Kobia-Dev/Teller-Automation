import { Component, OnInit } from '@angular/core';
import { StaffService } from '../../admin/services/staff.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teller',
  templateUrl: './teller.component.html',
  styleUrls: ['./teller.component.css']
})
export class TellerComponent implements OnInit {
  tellers: any[];
  currentPage: number = 1;
  pageSize: number = 6; // Number of tellers per page
  totalPages: number;
  pages: number[] = [];

  constructor(
    private tellerService: StaffService,
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
          this.totalPages = Math.ceil(this.tellers.length / this.pageSize);
          this.setPagesArray();
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

  click() {
    this.router.navigate(['/back-office/modify-teller']);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    // Call setPagesArray() after updating currentPage
    this.setPagesArray();
  }

  private setPagesArray(): void {
    this.pages = [];
    for (let i = 1; i <= this.totalPages; i++) {
      this.pages.push(i);
    }
  }

  // Update getDisplayedTellers() to return tellers for the current page
  getDisplayedTellers(): any[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = Math.min(startIndex + this.pageSize, this.tellers.length);
    return this.tellers.slice(startIndex, endIndex);
  }
  
  
}
