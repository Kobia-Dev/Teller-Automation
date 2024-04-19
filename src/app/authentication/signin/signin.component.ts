import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Role } from "src/app/core/models/role";
import { UnsubscribeOnDestroyAdapter } from "src/app/shared/UnsubscribeOnDestroyAdapter";
import { TokenStorageService } from "src/app/core/service/token-storage.service";
import { AuthService } from "src/app/core/service/auth.service";
import { Subject, takeUntil } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { MatSnackBar } from "@angular/material/snack-bar";
@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"],
  styles: [`
  ::ng-deep .mat-snack-bar-container{
    color: #FFFFFF !important;
    background-color: #32CD32 !important;
    border-color: #32CD32 !important;
  }
  ::ng-deep .mat-simple-snackbar-action {
    color: red;
  }
`,
`
  ::ng-deep .mat-snack-bar-container.error {
    color: #ffffff !important;
    background-color: #ff0000 !important;
    border-color: #ff0000 !important;
  }
  ::ng-deep .mat-simple-snackbar-action.error {
    color: olive green;
  }
`],
})
export class SigninComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit {
  authForm: FormGroup;
  submitted = false;
  loading = false;
  error = "";
  hide = true;


  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  destroy$: Subject<boolean> = new Subject<boolean>();


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private snack : MatSnackBar
  ) {
    super();
  }


  ngOnInit() { 
    this.authForm = this.formBuilder.group({ 
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  // onSubmit() {
  //   this.submitted = true;
  //   this.loading = true;
  //   this.error = "";
  //   if (this.authForm.invalid) {
  //     this.error = "Input Username and Password !";
  //     return;
  //   } else {
  //     console.log(this.authForm.value);
  //     this.authService.login(this.authForm.value).pipe(takeUntil(this.destroy$)).subscribe({
  //       next: ((res) => {

  //         if (res.statusCode === 200) {

  //           this.submitted = false;
  //           this.loading = false;
  //           this.tokenStorage.saveToken(res.entity.access_token);
  //           this.tokenStorage.saveUser(res.entity);
  //           const role = res.entity.role
  //           if (role == Role.Admin) {
  //             console.log("Role:", role);
  //             this.router.navigate(['/admin/dashboard']);
  //           } else {
  //             console.log("Access denied");
  //           }
  //         } else {
  //           this.error = res.message;
  //           this.submitted = false;
  //           this.loading = false;
  //           console.log("Message", res.message);
  //         }
  //       }),
  //       error: ((error) => {
  //         this.error = error;
  //         console.log(error);
  //         this.submitted = false;
  //         this.loading = false;
  //       }),
  //       complete: (() => { })

  //     })
  //   }
  // }

  onSubmit(){
    
    this.error= "";
    
    if(this.authForm.invalid){
      this.error="Input Username and Password";
    }

    console.log(this.authForm.value)
    this.authService.login(this.authForm.value).subscribe(
      (res: any)=>{

        this.tokenStorage.saveToken(res.token)
        this.tokenStorage.saveUser(res);

        const role = res.roles[0];
        console.log(role)

        this.snack.open("sucessfully logged in","X",{
          duration: 5000,
          horizontalPosition:'end',
          verticalPosition:'top',
          panelClass:'notif-success'
        })

        if(role == Role.Admin){
          // this.router.navigate(['/admin/dashboard']);  
          this.router.navigate(['/authentication/otp'])
        console.log("routed")
        }
        
        
      },
      (error: HttpErrorResponse)=>{

        this.snack.open("Login failed","X",{
          duration: 5000,
          horizontalPosition:'end',
          verticalPosition:'top',
          panelClass:'error'
        })
        console.log(error)
      }
    )
  }

  togglePasswordVisibility(): void {
    this.hide = !this.hide;
  }

}