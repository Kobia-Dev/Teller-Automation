import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "src/app/core/service/auth.service";
import { HttpParams } from "@angular/common/http";
import { MatSnackBar } from "@angular/material/snack-bar";
@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.scss"],
})
export class ForgotPasswordComponent implements OnInit {
  formData:any;
  authForm: FormGroup;
  submitted = false;
  returnUrl: string;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private snackbar: MatSnackBar,
  ) { }
  ngOnInit() {
    this.authForm = this.formBuilder.group({
      email: [
        "",
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
    });
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }
  get f() {
    return this.authForm.controls;
  }
  // onSubmit() {
  //   this.formData = this.authForm.value
  //   console.log("value", this.authForm.value);
  //   if (this.formData.email !=  this.formData.email ) {
  //     this.snackbar.open("Enter a valid email", 'close',{duration:3600})
  //   }else{
  //     this.authService.resetPassword(this.formData).subscribe(
  //       ((res) => {
  //         console.log(res);
          
  //       }),
  //       ((e) =>{this.snackbar.open(e, 'close',{duration:3600})}),
  //       ()=>{
  //         this.snackbar.open("Password reset successfully", 'Close',{duration:3600})
  //         this.router.navigate(['/authentication/signin']);
  //       }
  //     )
      
  //   }

  
  // }

  onSubmit() {
     this.submitted = true;
     // stop here if form is invalid
    if (this.authForm.invalid) {
       return;
     } else {
       // this.router.navigate(["/dashboard/main"]);
       const params = new HttpParams()
         .set("emailaddress", this.authForm.value);

       this.authService.forgotPassword({ emailaddress: this.authForm.value.email }).subscribe(res => {
         console.log(res)

       }, err => {
         console.log(err)
        //this.error = "Invalid Credentials!" ;
         // this.error = err;
       // console.log(err);
         // this.submitted = false;
         // this.loading = false;
      })
     }
   }
}
