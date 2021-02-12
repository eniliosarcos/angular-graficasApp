import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent implements OnInit {

    // Doughnut
    public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Others'];
    public doughnutChartData: MultiDataSet = [
      [350, 450, 100, 200],
    ];
    public doughnutChartType: ChartType = 'doughnut';
    public colors: Color[] = [
      {
        backgroundColor: [
          '#49B4FC',
          '#B63FD9',
          '#F08651',
          '#D9CE45',
          '#12FC75',
        ]
      }
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
