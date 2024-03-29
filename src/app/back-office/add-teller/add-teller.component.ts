import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TransactionService } from 'src/app/admin/services/transaction.service';

@Component({
  selector: 'app-add-teller',
  templateUrl: './add-teller.component.html',
  styleUrls: ['./add-teller.component.css']
})
export class AddTellerComponent implements OnInit {


  addTellerForm: FormGroup;
  error: any;
loading: any;

  constructor(private fb: FormBuilder,
    private transactionService: TransactionService,
    private router: Router,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.addTellerForm = this.fb.group({
      name: ['', [Validators.required]],
      email:['', [Validators.required, Validators.email]],
      national_id: ['', [Validators.required]],
      pfnumber: ['', Validators.required]

    })
  }
  onSubmit(){
    // console.log(this.addTellerForm.value);
    // this.staffService.addTeller(this.addTellerForm.value).subscribe( (response) =>{
    //   console.log(response);
    //   this.snackBar.open("teller added successfully", "Close", {duration: 5000});
    //    this.router.navigateByUrl('/admin/dashboard/dashboard-view');
    //   if(response.id != null){
    //      this.snackBar.open("teller added successfully", "Close", {duration: 5000});
    //     this.router.navigateByUrl('/admin/dashboard/dashboard-view');
    //  }else{
    //      alert("System busy, kindly try again later");
    //    }
    // })
  }

}
