import { Component, OnInit, ViewChild } from '@angular/core';
import { Sucursal } from '../../classes/sucursal';
import { Mes } from '../../classes/mes';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};



@Component({
  selector: 'app-listadoventas',
  templateUrl: './listadoventas.component.html',
  styleUrls: ['./listadoventas.component.css']
})
export class ListadoventasComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public listadoSucursales: Array<Sucursal>;
  public Sucursal1: Sucursal;
  public Sucursal2: Sucursal;
  public Sucursal3: Sucursal; 
  public Sucursal4: Sucursal;
  public Sucursal5: Sucursal;

  public Meses: Array<Mes>;


  nroRandom(): number{
    let nromax: number = 200;
    return Math.floor(Math.random() * nromax) + 1;
  }
  constructor() {
    this.chartOptions = {
      series: [
      ],
      chart: {
        height: 800,
        type: "line",
        stacked: false,
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: true
      },
      stroke: {
        curve: "straight",
        width: [1, 1]
      },
      
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "Enero","Febrero","Marzo",
          "Abril","Mayo","Junio",
          "Julio","Agosto","Septiembre",
          "Octubre","Noviembre","Diciembre"
        ]
      }
    };
  }

 

  ngOnInit(): void {
    this.Meses = new Array(new Mes("Enero",31),
                           new Mes("Febrero",28),
                           new Mes("Marzo",31),
                           new Mes("Abril",30),
                           new Mes("Mayo",31),
                           new Mes("Junio",30),
                           new Mes("Julio",31),
                           new Mes("Agosto",31),
                           new Mes("Septiembre",30),
                           new Mes("Octubre",31),
                           new Mes("Noviembre",30),
                           new Mes("Diciembre",31));

    this.Sucursal1 = new Sucursal("Casa matriz", "Santa Fe", "Calle 1" , new Array(this.nroRandom(),this.nroRandom(),this.nroRandom(),this.nroRandom(),this.nroRandom(),this.nroRandom(),this.nroRandom(),this.nroRandom(),this.nroRandom(),this.nroRandom(),this.nroRandom(),this.nroRandom()));
    this.Sucursal2 = new Sucursal("Sucursal Norte", "Reconquista", "Calle 2" ,  new Array(this.nroRandom(),this.nroRandom(),this.nroRandom(),this.nroRandom(),this.nroRandom(),this.nroRandom(),this.nroRandom(),this.nroRandom(),this.nroRandom(),this.nroRandom(),this.nroRandom(),this.nroRandom()));
    this.Sucursal3 = new Sucursal("Sucursal Sur", "Rosario", "Calle 3" ,  new Array(this.nroRandom(),this.nroRandom(),this.nroRandom(),this.nroRandom(),this.nroRandom(),this.nroRandom(),this.nroRandom(),this.nroRandom(),this.nroRandom(),this.nroRandom(),this.nroRandom(),this.nroRandom()));
    this.Sucursal4 = new Sucursal("Sucursal Oeste", "Rafael", "Calle 4" ,  new Array(this.nroRandom(),this.nroRandom(),this.nroRandom(),this.nroRandom(),this.nroRandom(),this.nroRandom(),this.nroRandom(),this.nroRandom(),this.nroRandom(),this.nroRandom(),this.nroRandom(),this.nroRandom()));
    this.Sucursal5 = new Sucursal("Sucursal Sur 2", "Rufino", "Calle 5" ,  new Array(this.nroRandom(),this.nroRandom(),this.nroRandom(),this.nroRandom(),this.nroRandom(),this.nroRandom(),this.nroRandom(),this.nroRandom(),this.nroRandom(),this.nroRandom(),this.nroRandom(),this.nroRandom()));
    this.listadoSucursales = new Array(this.Sucursal1, this.Sucursal2, this.Sucursal3, this.Sucursal4, this.Sucursal5);

    for (let suc of this.listadoSucursales) {
      this.chartOptions.series.push(
        {
          name: suc.nombre,
          data: suc.ventas
        }
      )
  }
  }
  

  


}
