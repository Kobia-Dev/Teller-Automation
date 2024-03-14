import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-international-money-transfer',
  templateUrl: './international-money-transfer.component.html',
  styleUrls: ['./international-money-transfer.component.css']
})
export class InternationalMoneyTransferComponent implements OnInit {

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
