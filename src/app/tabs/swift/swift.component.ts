import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-swift',
  templateUrl: './swift.component.html',
  styleUrls: ['./swift.component.css']
})
export class SwiftComponent implements OnInit {

  constructor(private router: Router) {
   
  }

  ngOnInit(): void {
  }

  navigateToEft(){
this.router.navigate(['reports', 'eft']);
  }
  navigateToFundsTransactions(){
    this.router.navigate(['transactions', 'funds-transactions'])
  }
}
