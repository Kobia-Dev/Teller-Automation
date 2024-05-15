import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { SnackbarService } from 'src/app/admin/services/snackbar.service';
import { TokenStorageServiceService } from 'src/app/admin/services/token-storage-service.service';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = "end";
  verticalPosition: MatSnackBarVerticalPosition = "top";

  otpForm: FormGroup;
  currentEmail: any;
  maskedEmail: any;
  currentUser: any;

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private formBuilder: FormBuilder,
    private tokenService: TokenStorageServiceService,
    private router: Router,
    private snack:MatSnackBar,
    private authService: AuthService,

    private snackbar: SnackbarService
  ) { }

  ngOnInit(): void {
    this.getEmail();

    this.otpForm = this.formBuilder.group({
      first: ["", Validators.required],
      second: ["", Validators.required],
      third: ["", Validators.required],
      fourth: ["", Validators.required],
    });
  }

  getEmail() {

    this.currentEmail = this.tokenService.getUser().email;
    this.currentUser = this.tokenService.getUser().username;

    console.log("this.currentEmail: ", this.currentEmail);
    const email = this.currentEmail;
    const atIndex = email.indexOf("@");
    const username = email.slice(0, atIndex);
    const domain = email.slice(atIndex);

    const maskedUsername =
      username.charAt(0) +
      "*".repeat(username.length - 2) +
      username.charAt(username.length - 1);
    const maskedEmail = maskedUsername + domain;
    this.maskedEmail = maskedEmail;
    console.log("The masked email is", maskedEmail); // Output: s********n@gmail.com
  }

  loading: boolean = false;
  error: any;
  
  onSubmit() {
    this.loading = true;
    this.error = "";
    if (this.otpForm.invalid) {
      this.error = "Invalid OTP!";
      return;
    } else {
      const otpValue = Number(
        this.otpForm.controls.first.value +
        this.otpForm.controls.second.value +
        this.otpForm.controls.third.value +
        this.otpForm.controls.fourth.value
      );


      const params = new HttpParams()
        // .set("format", type)
        .set("username", this.currentUser)
        .set("otpCode", otpValue);


      //this.tokenCookieService.saveUser(userJSON);

      //this.router.navigate(["/admin/dashboard"]);


      //this.tokenService.clearSharedTokenOrCookie();

      const otpData = {
        "otp": otpValue,
        "username": this.currentUser
      }
      this.authService
        .verifyOtp(otpData).subscribe(
          ((res)=>{
            
          }),
          ((error) =>{
            this.snack.open(error.error.message, "Close",{duration:3600})
            this.loading = false;
            
          }),
          ()=>{
            this.router.navigateByUrl("/admin/dashboard");

          }
        )     
        

              // this.router.navigateByUrl("/checker/dashboard/analytics");

            // } else {
            //   this.snackbar.showNotification("snackbar-danger", res.message);
            // }

        //     this.loading = false;
        //   },
        //   error: (err) => {
        //     this.snackbar.showNotification(
        //       "snackbar-danger",
        //       "Server Error: !!"
        //     );
        //     this.loading = false;
        //   },
        //   complete: () => { },
        // }),
        // Subscription;
    }
  }


  
  ngAfterViewInit() {

    const inputs = document.querySelectorAll<HTMLInputElement>('input[type="text"]');
    inputs.forEach((input, index) => {
      input.addEventListener("input", (event) => {
        const target = event.target as HTMLInputElement;
        const maxLength = target.maxLength;
        const inputLength = target.value.length;

        if (inputLength === maxLength) {
          const nextIndex = index + 1;
          if (inputs[nextIndex]) {
            (inputs[nextIndex] as HTMLInputElement).focus();
          }
        }
      });
      input.addEventListener("click", (event) => {
        const target = event.target as HTMLInputElement;
        target.value = ""; 
      });

      input.addEventListener("focus", (event) => {
        const target = event.target as HTMLInputElement;
        target.value = ""; // Clear the input field when it gains focus
      });
    });
  }

}
 