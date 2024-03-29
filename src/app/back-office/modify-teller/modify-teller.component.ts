import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs';
import { TransactionService } from 'src/app/admin/services/transaction.service';
import { AuthService } from 'src/app/core/service/auth.service';
import { TokenStorageService } from 'src/app/core/service/token-storage.service';

@Component({
  selector: 'app-modify-teller',
  templateUrl: './modify-teller.component.html',
  styleUrls: ['./modify-teller.component.css']
})
export class ModifyTellerComponent implements OnInit {
  modifyTellerForm: FormGroup;
  submitted = false;
  loading = false;
  error = "";
  hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tellerService: TransactionService,
    private tokenStorage: TokenStorageService
  ) {}

  ngOnInit() {
    this.modifyTellerForm = this.formBuilder.group({
      id: ["", Validators.required],
      name: ["", Validators.required],
      email: ["", Validators.required],
      nationalId: ["", Validators.required],
      role: ["", Validators.required],
    });
  }
  onSubmit() {
    this.submitted = true;
    this.loading = true;
    this.error = "";
    console.log ("submission form data",this.modifyTellerForm.value)
    
    if (this.modifyTellerForm.invalid) {
      this.error = "All the required fields !";
      this.submitted = false;
      this.loading = false;
      return;
    }

    this.tellerService.updateTeller(this.modifyTellerForm.value, this.tokenStorage)
      .subscribe({
        next: (res) => {
          console.log("Response", res); // Log the entire response object
          if (res) {
            this.submitted = false;
            this.loading = false;
            this.tokenStorage.saveToken(res.token);
            this.tokenStorage.saveUser(res);
            
          } else {  
            this.error = res.message || "An error occurred";
            this.submitted = false;
            this.loading = false;
            console.log("Message", res.message); // Log the message if available
          }
        },
        error: (error) => {
          this.error = error.message || "An error occurred";
          console.log(error);
          this.submitted = false;
          this.loading = false;
        },
        complete: () => {}
      });
  }

  
}
