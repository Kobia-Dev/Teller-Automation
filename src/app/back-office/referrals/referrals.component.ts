import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TransactionService } from 'src/app/admin/services/transaction.service';
import { ViewGlsComponent } from 'src/app/tabs/view-gls/view-gls.component';

@Component({
  selector: 'app-referrals',
  templateUrl: './referrals.component.html',
  styleUrls: ['./referrals.component.css']
})
export class ReferralsComponent implements OnInit {
data: any;


  constructor(private dialog : MatDialog, private http: TransactionService, private snack: MatSnackBar
    
  ){}
  ngOnInit(): void {
  }
  viewGls(data:any) {
    this.dialog.open(ViewGlsComponent, {
      width:"80%",
      height:"65%",
      position:{
        right:"20px"
      },
      data:{
        criticalRole:data
      }

    })
    }
}
