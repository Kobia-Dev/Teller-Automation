import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Correct import for Router

@Component({
  selector: 'app-funds-transfer-report',
  templateUrl: './funds-transfer-report.component.html',
  styleUrls: ['./funds-transfer-report.component.css']
})
export class FundsTransferReportComponent implements OnInit {
  constructor(private router: Router) {
    // Constructor logic (if needed)
  }

  ngOnInit(): void {
    
    
  }

  setTab(tabname: string) {
    this.router.navigate([`/${tabname}`]);
  }
}
