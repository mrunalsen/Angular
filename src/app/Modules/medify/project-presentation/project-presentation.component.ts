import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
      this.method(data);
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


  //  dynamic data
  method(temp: Chart[]) {
    /**
     * @forEach loop
     */
    //  let iterator = 0;
    //   this.columnData.forEach( (i) => {
    //   this.data[iterator][1] = i.patient;
    //   console.log(this.data[iterator][1]);
    //   iterator++;
    // });

    /**
     * @for...of loop
     */
     let p = 0;
     for (const i of temp) {
      //  if(this.data[p][0]==i.day){
        //  console.log(this.data[p][0]===i.day, " ",this.data[p][0], " ", i.day);
         this.data[p][0] = i.day;
         this.data[p][1] = i.patient;
         this.cRef.detectChanges();
      //  }
      //  else{
        //  this.data[p][1] = 0;
      //  }
       // console.log(this.data[p][1]);
       p++;
       
     }
     console.log(this.data)

    // return newtempData;
    /**
     * @for loop
     */
    //  for(let i =0 ; i<= this.columnData.length; i++) {
    //   //  console.log(this.columnData[i].patient);
    //    this.data[i][1]=this.columnData[i].patient;
    //   //  console.log(this.data[i][1])
    //  }
  }

  columnNames = ['Year', 'Asia'];
  //  backgroundColor: {color: 'red'};	

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
    colors: ['#7fb4be']
    // chartArea: { width: '100%', height: '100%' },
  };

  width = 550;
  height = 500;

  //  select this week or lasst week
  public selected: number;
  public tempColumnData: Chart[];
  public tempData: Chart[];

  update(e: any) {
    this.selected = e.target.value
    this.tempColumnData = this.columnData;

    if (this.selected == 1) {
      this.tempData = this.tempColumnData.slice(0, 7)
      this.method(this.tempData)
     
      //  console.log(this.tempColumnData.slice(0,7));
    }
    else {
      this.tempData = this.tempColumnData.slice(7)
      this.method(this.tempData);
      this.cRef.detectChanges();
      // console.log(this.tempColumnData.slice(7));
    }
  }

  // updateData(e: any) {
  //   this.selected = e.target.value
  //   this.tempColumnData = this.columnData;

  //   if (this.selected == 1) {
  //     this.tempData = this.tempColumnData.slice(0, 7)
  //     console.log(this.tempData, "Week data")
  //     // this.data = this.tempData
  //     this.data = this.mehtod(this.tempData)
  //     console.log(this.data,"updated")
  //   }
  //   else {
  //     this.tempData = this.tempColumnData.slice(7)
  //     console.log(this.tempData, "Week data")
  //     this.data = this.mehtod(this.tempData)
  //     console.log(this.data,"updated")
  //   }

  //end: column-chart
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
