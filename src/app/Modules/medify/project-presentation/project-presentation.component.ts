import { AfterContentInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ChartType } from 'angular-google-charts';
import { login } from '../../login/login.model';
import { Chart } from '../models/charts.model';
import { Medical, Patient, Prescription } from '../models/medify.model';
import { ChartsService } from '../project-presenter/charts.service';
import { ProjectPresenterService } from '../project-presenter/project-presenter.service';

@Component({
  selector: 'app-project-presentation',
  templateUrl: './project-presentation.component.html',
  styleUrls: ['./project-presentation.component.scss']
})
export class ProjectPresentationComponent implements OnInit, AfterContentInit {

  constructor(
    private doctorService: ProjectPresenterService,
    private chartService: ChartsService,
    private cRef: ChangeDetectorRef,
  ) { }
  ngAfterContentInit(): void {
  }

  ngOnInit(): void {
    this.getChartData();
    this.getPrescriptionData();
    this.getPatient();

  }


  //start: column chart 

  public type = ChartType.ColumnChart;

  public columnData: Chart[];

  getChartData() {
    this.chartService.getColumn().subscribe(data => {
      // console.log(data)
      this.columnData = data;
      const weekValue = { target: { value: 1 } }
      this.update(weekValue)
    })
  }
  public data = [
    ["Mon", 6],
    ["Tue", 10],
    ["Wed", 1],
    ["Thu", 3],
    ["Fri", 5],
    ["Sat", 2],
    ["Sun", 1],
  ];

  options = {
    legend: 'none',
    bar: { groupWidth: "30" },
    explorer: { axis: 'horizontal', keepInBounds: true },
    vAxis: {
      /**
       * @remove : minor gridlines
       */
      minorGridlines: { count: 0 },
      gridlines: {
        // color: 'none'

        lineStyle: "dashed",
      },

    },
    series: {
      0: { lineDashStyle: [2, 2] },
    },
    colors: ['#7fb4be'],
    chartArea: { width: '600', height: '100%' },
  };

  width = 800;
  height = 500;

  public selected: number
  public temper: Chart[]

  public update(e: any) {
    this.selected = e.target.value
    this.data = [];
    this.temper = this.columnData.map((val) => val)
    if (this.selected == 1) {
      this.temper = this.temper.slice(-7)
      this.temper.forEach((some) => {
        this.data.push([some.day, some.patient])
      })
    }
    else if (this.selected == 2) {
      this.temper = this.temper.slice(-14, -7)
      this.temper.forEach((some) => {
        this.data.push([some.day, some.patient])
      })
    }
    else {
      this.temper = this.temper.slice(-21)
      this.temper.forEach((some) => {
        this.data.push([some.day, some.patient])
      })
    }
  }

  public firstName: String = 'Virat';

  public Data: Medical[] = [
    {
      medical: "Medicare Pharmacy 1",
      number: 99999999998,
      address: "Valsad,Gujarat"
    },
    {
      medical: "Medicare Pharmacy 2",
      number: 99999999988,
      address: "Valsad,Gujarat"
    },
    {
      medical: "Medicare Pharmacy 3",
      number: 99999999999,
      address: "Valsad,Gujarat"
    }
  ]

  public preData: Prescription[];

  getPrescriptionData() {
    this.doctorService.getPrescription().subscribe(data => {
      this.preData = data;
      console.log(data);
    })
  }

  public patientData: Patient[];

  getPatient() {
    this.doctorService.getPatient().subscribe(data => {
      this.patientData = data;
      console.log(data);
    })
  }
}
