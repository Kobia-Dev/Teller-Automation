import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./core/guard/auth.guard";
import { Role } from "./core/models/role";
import { AuthLayoutComponent } from "./layout/app-layout/auth-layout/auth-layout.component";
import { MainLayoutComponent } from "./layout/app-layout/main-layout/main-layout.component";
import { Page404Component } from "./authentication/page404/page404.component";
const routes: Routes = [
  {
    path: "",
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "", redirectTo: "/authentication/signin", pathMatch: "full" },
      {
        path: "admin",
        canActivate: [AuthGuard],
        //  data: {
        //  role: Role.Admin,
        //  },
        loadChildren: () =>
          import("./admin/admin.module").then((m) => m.AdminModule),
      }, 
      {
        path: "reports",
        loadChildren: () =>
          import("./reports/reports.module").then((m) => m.ReportsModule),
      },
      {
        path: "tellers",
        loadChildren: () =>
          import("./tellers/tellers.module").then((m) => m.TellersModule),
      },
      {
        path: "transactions",
        loadChildren: () =>
          import("./transactions/transactions.module").then((m) => m.TransactionsModule),
      },
      {
        path: "back-office",
        loadChildren: () =>
          import("./back-office/back-office.module").then((m) => m.BackOfficeModule),
      },
      
      
      
      
   
      
    ],
  },
  {
    path: "authentication",
    component: AuthLayoutComponent,
    loadChildren: () =>
      import("./authentication/authentication.module").then(
        (m) => m.AuthenticationModule
      ),
  },
  { path: '**', component: Page404Component }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule { }