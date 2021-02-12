import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.css']
})
export class DonaHttpComponent implements OnInit {

  // Doughnut
  public doughnutChartLabels: Label[] = [
    // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Others'
  ];
  public doughnutChartData: MultiDataSet = [
    // [350, 450, 100, 200],
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
  
  constructor(private graficasServices: GraficasService) { }

  ngOnInit(): void {

    // this.graficasServices.getUsuariosRedesSociales()
    //   .subscribe( data =>{

    //     console.log(data);

    //     const labels = Object.keys(data);
    //     const values = Object.values(data);

    //     this.doughnutChartLabels = labels;
    //     this.doughnutChartData.push(values);
    //   });

    this.graficasServices.getUsuariosRedesSocialesDonaData()
      .subscribe(({labels,values}) => {

        this.doughnutChartLabels = labels;
        this.doughnutChartData.push(values);
      })
  }

}
