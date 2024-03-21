import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-western-union',
  templateUrl: './western-union.component.html',
  styleUrls: ['./western-union.component.css']
})
export class WesternUnionComponent implements OnInit {

  constructor(private router: Router) {
   
  }

  ngOnInit(): void {
  }

//   navigateToWesternUnion(){
// this.router.navigate(['reports', 'western-union']);
//   }
  navigateToFundsTransactions(){
    this.router.navigate(['reports', 'rtgs'])
  }
}
