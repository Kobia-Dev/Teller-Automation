import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-money-gram',
  templateUrl: './money-gram.component.html',
  styleUrls: ['./money-gram.component.css']
})
export class MoneyGramComponent implements OnInit {

  constructor(private router: Router) {
   
  }

  ngOnInit(): void {
  }

  navigateToWesternUnion(){
this.router.navigate(['reports', 'western-union']);
  }
  navigateToFundsTransactions(){
    this.router.navigate(['transactions', 'funds-transactions'])
  }
}
