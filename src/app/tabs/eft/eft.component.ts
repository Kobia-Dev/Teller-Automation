import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eft',
  templateUrl: './eft.component.html',
  styleUrls: ['./eft.component.css']
})
export class EftComponent implements OnInit {

  constructor(private router: Router) {
   
  }

  ngOnInit(): void {
  }

  navigateToInternalTransfer(){
this.router.navigate(['reports', 'internal-transfer']);
  }
  navigateToFundsTransactions(){
    this.router.navigate(['transactions', 'funds-transactions'])
  }
}
