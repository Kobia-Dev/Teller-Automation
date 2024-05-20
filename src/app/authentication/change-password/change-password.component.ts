import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { duration } from 'moment';
import { AdminService } from 'src/app/admin/services/admin.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  oldPassword = true;
  password = true;
  confirmPassword = true;
  changePasswordForm: any = FormGroup;
  responseMessage: any;

  constructor(
    private adminService: AdminService,
    private formBuilder: FormBuilder,
    private router: Router,
    private snackbar:MatSnackBar
  ) {}

  ngOnInit() {
    this.changePasswordForm = this.formBuilder.group({
      emailAddress: [null, [Validators.required, Validators.email]],
      oldPassword: [null, [Validators.required]],
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]]
    })
  }

  validateSubmit(){
    if (this.changePasswordForm.controls['password'].value != this.changePasswordForm.controls['confirmPassword'].value) {
      return true;
    } else {
      return false;
    }
  }
  handleChangePasswordSubmit(){
    var formData = this.changePasswordForm.value;
    var data = {
      emailAddress: formData.emailAddress,
      oldPassword: formData.oldPassword,
      password: formData.password,
      confirmPassword: formData.confirmPassword
    }

    console.log(data)
    this.adminService.changePassword(data).subscribe((response: any) => {
      console.log(response)
      this.responseMessage = response?.message;
      this.snackbar.open(this.responseMessage, "Close", {
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      });
      this.router.navigate(['/authentication/signin']);
    }, (error) => {
     console.log(error)
     this.snackbar.open("Incorrect password or email", "Close", {
      duration: 5000,
      verticalPosition: 'top',
      horizontalPosition: 'center'
     })
      
    })
  }
      
    
}