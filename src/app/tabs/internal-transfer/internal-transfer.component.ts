import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-internal-transfer',
  templateUrl: './internal-transfer.component.html',
  styleUrls: ['./internal-transfer.component.css']
})
export class InternalTransferComponent implements OnInit {

  constructor(private router: Router) {
   
  }

  ngOnInit(): void {
  }

  navigateToMoneyGram(){
this.router.navigate(['reports', 'money-gram']);
  }
  navigateToFundsTransactions(){
    this.router.navigate(['transactions', 'funds-transactions'])
  }
}
