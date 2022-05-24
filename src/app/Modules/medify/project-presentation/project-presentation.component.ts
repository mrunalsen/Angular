import { AfterContentInit, Component, OnInit } from '@angular/core';
import { ChartType } from 'angular-google-charts';
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

  ) { }
  ngAfterContentInit(): void {
  }

  ngOnInit(): void {
    this.getChartData();
    this.getPrescriptionData();
    this.getPatient();

  }

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
    width: '100%',
    height: '200',
    legend: 'none',
    bar: { groupWidth: "25" },
    explorer: { axis: 'horizontal', keepInBounds: true },
    vAxis: {
      minorGridlines: { count: 0 },
      textStyle: { color: 'gray' },
      viewWindowMode: "explicit", viewWindow: { min: 0 }
    },
    hAxis: {
      textStyle: { color: 'gray' },
    },
    series: {
      0: { lineDashStyle: [4, 4] },
    },
    colors: ['#7fb4be'],
    chartArea: { width: '90%', height: '100' },
  };
  // @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth > 620) {
      console.log("they changed me ")
      this.options.bar.groupWidth = "50";
    }
  }

  // width = 800;
  // height = 400;

  public selected: number
  public temper: Chart[]

  public update(e: any) {
    this.selected = e.target.value
    this.data = [];
    this.temper = this.columnData.map((val) => val)
    if (this.selected == 1) {
      this.temper = this.temper.slice(-7)
      this.temper.forEach((some) => {
        let d = new Date(some.Date);
        console.log(d);

        let dayName = d.toString().split(' ')[0]
        this.data.push([dayName, some.Count])
        console.log(dayName);
      })
    }
    // else if (this.selected == 2) {
    //   this.temper = this.temper.slice(-14, -7)
    //   this.temper.forEach((some) => {
    //     this.data.push([some.Date, some.Count])
    //   })
    // }
    else {
      this.temper = this.temper.slice(-31)
      this.temper.forEach((some) => {
        let todayTime = new Date(some.Date);
        let month = todayTime.getMonth() + 1;
        let day = todayTime.getDate();
        let year =todayTime.getFullYear();
        let date = month + "/" + day + "/" + year;
        this.data.push([date, some.Count])
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
    })
  }

  public patientData: Patient[];

  getPatient() {
    this.doctorService.getPatient().subscribe(data => {
      this.patientData = data;
    })
  }
}
