import { Component, OnInit } from '@angular/core';
import { StaffService } from '../../admin/services/staff.service';
//import { error } from 'console';


@Component({
  selector: 'app-teller',
  templateUrl: './teller.component.html',
  styleUrls: ['./teller.component.css']
})
export class TellerComponent implements OnInit {

  tellers: any[];

  constructor(private tellerService: StaffService) { }

  ngOnInit(): void {
    this.getAllTellers();
  }
  
  public getAllTellers(): void{ 
    this.tellerService.getAllTellers().subscribe({
      next: ((response) => {
        if (response.statusCode === 200) {
          this.tellers = response.entity;
          
          
          
          
        } else {
        }
      }),
      error: ((error) => {
        console.log('Error', error);
      }),
      complete: (() => { })
    })
  
}
}
