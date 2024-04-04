import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexMarkers,
  ApexYAxis,
  ApexGrid,
  ApexTitleSubtitle,
  ApexLegend
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  tooltip: any; // ApexTooltip;
  yaxis: ApexYAxis;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-customer-transactions',
  templateUrl: './customer-transactions.component.html',
  styleUrls: ['./customer-transactions.component.css']
})
export class CustomerTransactionsComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions1: Partial<ChartOptions>;
  public chartOptions2: Partial<ChartOptions>;

  constructor() {
    this.chartOptions2 = {
      series: [
        {
          name: "Customers",
          data: [120, 70, 85, 30, 45, 35, 30, 25, 10, 25, 20, 10]
        },
        {
          name: "Tellers",
          data: [15, 20, 25, 15, 10, 8, 6, 5, 7, 3, 2, 35]
        },
        {
          name: "GLs",
          data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
        },
        {
          name: "ATMs",
          data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
        },
      ],
      chart: {
        height: 400,
        type: "line"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 5,
        curve: "straight",
        dashArray: [0, 8, 5]
      },
      title: {
        text: "Transactions Distribution",
        align: "left"
      },
      legend: {
        tooltipHoverFormatter: function(val, opts) {
          return (
            val +
            " - <strong>" +
            opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
            "</strong>"
          );
        }
      },
      markers: {
        size: 0,
        hover: {
          sizeOffset: 6
        }
      },
      xaxis: {
        labels: {
          trim: false
        },
        categories: [
          "01 Jan",
          "02 Jan",
          "03 Jan",
          "04 Jan",
          "05 Jan",
          "06 Jan",
          "07 Jan",
          "08 Jan",
          "09 Jan",
          "10 Jan",
          "11 Jan",
          "12 Jan"
        ]
      },
      tooltip: {
        y: [
          {
            title: {
              formatter: function(val) {
                return val + " Kshs";
              }
            }
          },
          {
            title: {
              formatter: function(val) {
                return val + " Kshs";
              }
            }
          },
          {
            title: {
              formatter: function(val) {
                return val + " Kshs";
              }
            }
          },
          {
            title: {
              formatter: function(val) {
                return val + " Kshs";
              }
            }
          }
        ]
      },
      grid: {
        borderColor: "#f1f1f1"
      }
    };
   }

  ngOnInit(): void {
  }

}