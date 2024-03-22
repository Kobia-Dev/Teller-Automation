import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};



@Component({
  selector: 'app-mixed-transactions-bar',
  templateUrl: './mixed-transactions-bar.component.html',
  styleUrls: ['./mixed-transactions-bar.component.css']
})
export class MixedTransactionsBarComponent implements OnInit {

  @ViewChild("chart") chart: MixedTransactionsBarComponent;
  public chartOptions: Partial<ChartOptions>;


  constructor() { 
    this.chartOptions = {
      series: [44, 55],
      chart: {
        type: "donut"
      },
      labels: ["Livestock", "Crops"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 600
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    }; 
  }

  ngOnInit(): void {
  }

}
