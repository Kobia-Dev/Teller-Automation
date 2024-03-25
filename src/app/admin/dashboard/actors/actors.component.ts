import { Component, OnInit } from '@angular/core';
import { ChartTitleOptions } from 'chart.js';
import { Series } from 'd3-shape';
import { StaffService } from '../../services/staff.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {
  public chartOptions: Partial<ChartTitleOptions>
  tellers: any[] = [];
  tellersCount: number = 0;

  withdrawals: any[] = [];
  withdrawalsCount: number = 0;

  constructor(
    private tellersService: StaffService,
    private withdrawalService: StaffService
  ) { }

  ngOnInit(): void {
  }
  private getAllTellers() {
    this.tellersService.getAllTellers().subscribe({
      next: ((response) => {
        this.tellers = response.entity;
        this.tellersCount = this.tellers.length;
        // this.renderCharts();
      }),
      error: ((error) => {
        console.log("Error fetching agrodealers", error);
      }),
      complete: (() => { })
    })
  }
  private getAllWithdrawals() {
    this.withdrawalService.getAllWithdrawals().subscribe({
      next: ((response) => {
        this.withdrawals = response.entity;
        this.withdrawalsCount = this.tellers.length;
        // this.renderCharts();
      }),
      error: ((error) => {
        console.log("Error fetching agrodealers", error);
      }),
      complete: (() => { })
    })
  }

  
}
