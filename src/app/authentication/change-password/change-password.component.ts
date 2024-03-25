import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin/services/admin.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm: FormGroup;
  formData:any;

  constructor(
    private http:AdminService,
    private formBuilder: FormBuilder,
    private router: Router,
    private snackbar:MatSnackBar
  ) {
    this.changePasswordForm = this.formBuilder.group({
      emailAddress: ['', Validators.required],
      oldPassword: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  ngOnInit() {

  }

  onSubmit() {
    this.formData = this.changePasswordForm.value
    console.log("values", this.changePasswordForm.value);
    if (this.formData.password !=  this.formData.confirmPassword ) {
      this.snackbar.open("Password do not match", 'close',{duration:3600})
    }else{
      this.http.changePassword(this.formData).subscribe(
        ((res) => {
          console.log(res);
          
        }),
        ((e) =>{this.snackbar.open(e, 'close',{duration:3600})}),
        ()=>{
          this.snackbar.open("Password changed successfully", 'close',{duration:3600})
          this.router.navigate(['/authentication/signin']);
        }
      )
      
    }

  
  }
}
