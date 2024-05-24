import { Component, OnInit, ViewChild } from '@angular/core';
import { Form } from '@angular/forms';
import { TransactionService } from 'src/app/admin/services/transaction.service';



@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  customerSearchForm = { acc: '' };
  showClearIcon = false;
  isSearching: boolean = false;
  customerData:any;
  constructor(
    private http:TransactionService
   ) {}

    
  ngOnInit(): void {
  }

  clearInput(acc:any) {
    this.customerSearchForm.acc = '';
    this.showClearIcon = false;
    
  }
  search(account: any) {
    this.isSearching = true
    console.log(account.value.acc);

      this.http.customerByAcc(account.value.acc).subscribe(
        ((res) => {
          this.customerData = res.entity
          console.log("details", res);
        }),
        ((error)=>{
          console.log(error);
          this.isSearching = false          
        }),
        () =>{
          this.isSearching = false
          account.reset()
        }
      )
    account.reset()
    
    }
  
}
