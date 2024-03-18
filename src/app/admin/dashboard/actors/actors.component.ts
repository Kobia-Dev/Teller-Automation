import { Component, OnInit } from '@angular/core';
import { ChartTitleOptions } from 'chart.js';
import { Series } from 'd3-shape';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public chartOptions: Partial<ChartTitleOptions>
  
}
