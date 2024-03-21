import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
// import { Router } from '@angular/router';


@Component({
  selector: 'app-rtgs',
  templateUrl: './rtgs.component.html',
  styleUrls: ['./rtgs.component.css']
})
export class RtgsComponent implements OnInit {
  // router: Router = inject(Router);

  constructor(private router: Router) {
   
  }

  ngOnInit(): void {
  }

  navigateToSwift(){
this.router.navigate(['reports', 'swift']);
  }
  navigateToFundsTransactions(){
    this.router.navigate(['transactions', 'funds-transactions'])
  }
}
