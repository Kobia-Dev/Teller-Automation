import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Role } from "src/app/core/models/role";
import { UnsubscribeOnDestroyAdapter } from "src/app/shared/UnsubscribeOnDestroyAdapter";
import { TokenStorageService } from "src/app/core/service/token-storage.service";
import { AuthService } from "src/app/core/service/auth.service";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"],
})
export class SigninComponent extends UnsubscribeOnDestroyAdapter implements OnInit {
  destroy$: Subject<boolean> = new Subject<boolean>(); 
  authForm: FormGroup;
  submitted = false;
  loading = false;
  error = "";
  hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private tokenStorage: TokenStorageService
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
    this.unsubscribeAll();
  }

  onSubmit() {
    this.submitted = true;
    this.loading = true;
    this.error = "";
    console.log ("submission form data",this.authForm.value)
    
    if (this.authForm.invalid) {
      this.error = "Input Username and Password !";
      this.submitted = false;
      this.loading = false;
      return;
    }

    this.authService.login(this.authForm.value)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          console.log("Response", res); // Log the entire response object
          if (res) {
            this.submitted = false;
            this.loading = false;
            this.tokenStorage.saveToken(res.token);
            this.tokenStorage.saveUser(res);
            if (res.roles.includes(Role.Admin)) {
              this.router.navigate(['/admin/dashboard/actors']);
            } else {
              // Redirect logic for non-admin users
            }
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

  togglePasswordVisibility(): void {
    this.hide = !this.hide;
  }

  private unsubscribeAll(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
