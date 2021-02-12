import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styleUrls: ['./grafica-barra.component.css']
})
export class GraficaBarraComponent implements OnInit {

  @Input() horizontal: boolean = false;

  @Input() barChartData: ChartDataSets[] = [
    
    // { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' , backgroundColor: '#FACD78', hoverBackgroundColor: 'red'},
    // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' , backgroundColor: '#7E8EED', hoverBackgroundColor: 'red'},
    // { data: [18, 78, 20, 89, 26, 57, 100], label: 'Series C' , backgroundColor: '#67D68F', hoverBackgroundColor: 'red'}
  ];

  @Input() barChartLabels: Label[] = [
    // '2015', '2016', '2017', '2018', '2019', '2020', '2021'
  ];

  public barChartOptions: ChartOptions = {
    responsive: true,

  };

  public barChartType: ChartType = 'bar';
  public barChartLegend = true;


  constructor() { }

  ngOnInit(): void {

    if(this.horizontal){

      this.barChartType = 'horizontalBar';
    }
  }

}
