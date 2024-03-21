import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-funds-transfer',
  templateUrl: './funds-transfer.component.html',
  styleUrls: ['./funds-transfer.component.css']
})
export class FundsTransferComponent implements OnInit {

  constructor(private router: Router) {
    // Constructor logic (if needed)
  }

  ngOnInit(): void {
    // Additional initialization logic (if needed)
  }


  
  setTab(tabname: string) {
    this.router.navigate([`/${tabname}`]);
  }

}
