import { Component, ViewChild} from '@angular/core';

import { PopoverController } from '@ionic/angular';

import { PopoverPage } from '../about-popover/about-popover';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid, ApexFill, ApexYAxis
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  grid: ApexGrid;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
};

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  styleUrls: ['./about.scss'],
})

export class AboutPage {
  @ViewChild("chart", { static: false }) chart: ChartComponent;

  public chartOptions1: ChartOptions;
  public chartOptions2: ChartOptions;
  public chartOptions3: ChartOptions;

  location = 'madison';
  conferenceDate = '2047-05-17';

  selectOptions = {
    header: 'Select a Location'
  };

  constructor(public popoverCtrl: PopoverController) {
    
    this.chartOptions1 = {
      series: [
        {
          name: "Activity",
          data: [30, 41, 38, 51, 68, 65, 69, 81, 78]
        }
      ],
      chart: {
        height: 'auto',
        width: '100%',
        type: "line",
        background: '#f64e60',
        foreColor: '#f64e60',
        sparkline: {
          enabled: true
        },
        toolbar: {
          show: false
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 4,
            left: 2,
            blur: 2
            ,
            color: '#ac3643',
            opacity: 0.25
        }
      },
      title: {
        text: undefined
      },
      xaxis: {
        categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep"],
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        }
      },
      grid: {
        show: false,
      },
      yaxis: {
        show: false,
      },
      stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'round',
        colors: ['#ac3643'],
        width: 3,
        dashArray: 0,      
    }
    };

    this.chartOptions2 = {
      series: [
        {
          name: "Nutrient",
          data: [43, 41, 39, 42, 40, 41, 44, 45, 48]
        }
      ],
      chart: {
        height: 'auto',
        width: '100%',
        type: "line",
        background: '#ffa800',
        foreColor: '#ffa800',
        sparkline: {
          enabled: true
        },
        toolbar: {
          show: false
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 4,
            left: 2,
            blur: 2
            ,
            color: '#996400',
            opacity: 0.25
        }
      },
      title: {
        text: undefined
      },
      xaxis: {
        categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep"],
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        }
      },
      grid: {
        show: false,
      },
      yaxis: {
        show: false,
      },
      stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'round',
        colors: ['#996400'],
        width: 3,
        dashArray: 0,      
    }
    };

    this.chartOptions3 = {
      series: [
        {
          name: "Health",
          data: [45, 41, 38, 51, 68, 65, 69, 73, 65]
        }
      ],
      chart: {
        height: 'auto',
        width: '100%',
        type: "line",
        background: '#1bc5bd',
        foreColor: '#1bc5bd',
        sparkline: {
          enabled: true
        },
        toolbar: {
          show: false
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 4,
            left: 2,
            blur: 2
            ,
            color: '#107671',
            opacity: 0.25
        }
      },
      title: {
        text: undefined
      },
      xaxis: {
        categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep"],
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        }
      },
      grid: {
        show: false,
      },
      yaxis: {
        show: false,
      },
      stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'round',
        colors: ['#107671'],
        width: 3,
        dashArray: 0,      
    }
    };

   }


  async presentPopover(event: Event) {
    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      event
    });
    await popover.present();
  }
}
