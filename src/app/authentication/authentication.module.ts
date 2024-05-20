import { NgModule } from "@angular/core";
import { AsyncPipe, CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AuthenticationRoutingModule } from "./authentication-routing.module";
import { Page500Component } from "./page500/page500.component";
import { Page404Component } from "./page404/page404.component";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { LockedComponent } from "./locked/locked.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormField, MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { MatCardModule } from '@angular/material/card';

import { MatSelectModule } from '@angular/material/select';

import {MatDatepickerModule} from '@angular/material/datepicker';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatDialogModule } from "@angular/material/dialog";
import { ChangePasswordComponent } from './change-password/change-password.component';
import { OtpComponent } from './otp/otp.component';
import {MatToolbarModule} from '@angular/material/toolbar';





@NgModule({
  declarations: [
    Page500Component,
    Page404Component,
    SigninComponent,
    SignupComponent,
    LockedComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    ChangePasswordComponent,
    OtpComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatToolbarModule

    
  ],
})
export class AuthenticationModule {}
