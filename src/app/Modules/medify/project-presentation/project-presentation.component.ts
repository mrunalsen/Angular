import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
export class ProjectPresentationComponent implements OnInit {

  constructor(
    private doctorService: ProjectPresenterService,
    private chartService: ChartsService,
    private cRef: ChangeDetectorRef,
    ) { }

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
      console.log(data)
      this.columnData = data;
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
    bar: {groupWidth: "30"},
    explorer: {axis: 'horizontal',keepInBounds: true},
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
    series:{
      0: { lineDashStyle: [2, 2] },
    },
    colors: ['#7fb4be'],
    chartArea: { width: '600', height: '100%' },
  };

  width = 800;
  height = 500;

  public selected: number
  public temper : Chart[]
  
  public update(e: any) {
    this.data = [];
    this.selected = e.target.value;
    // console.log(this.selected)

    if(this.selected == 1) {
      this.temper = this.columnData.map((val) => val)
      this.temper = this.temper.slice(-7)
      console.log(this.columnData , "colummndata");
      console.log(this.temper , "hi");
            
      this.temper.forEach((some) => {
        this.data.push([some.day, some.patient])
        // console.log(this.data);
      })
      // console.log(this.temper);
    }
    else if(this.selected == 2 ) {
      this.temper = this.columnData.map((val) => val)
      this.temper = this.temper.slice(-14, -7)
      console.log(this.temper);
      this.temper.forEach((some) => {
        this.data.push([some.day, some.patient])
        // console.log(this.data);
      })
    }
    else {
      this.temper = this.columnData.map((val) => val)
      this.temper = this.temper.slice(-21)
      // console.log(this.temper);
      this.temper.forEach((some) => {
        this.data.push([some.day, some.patient])
        // console.log(this.data);
      })
    }
    console.log(this.data);
    
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

  getPrescriptionData(){
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
