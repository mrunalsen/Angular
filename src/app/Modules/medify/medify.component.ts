import { Component, OnInit } from '@angular/core';
import { ChartType } from 'angular-google-charts';
var google : any
@Component({
  selector: 'app-medify',
  templateUrl: './medify.component.html',
  styleUrls: ['./medify.component.scss']
})
export class MedifyComponent  {
  
  title = 'Siria';
   type = ChartType.BarChart;
   data = [
      ["2012", 900, 390],
      ["2013", 1000, 400],
      ["2014", 1170, 440],
      ["2015", 1250, 480],
      ["2016", 1500, 540]
   ];
   columnNames = ['Year', 'Asia','Europe'];
   options = {   
      hAxis: {
         title: 'Year'
      },
      vAxis:{
         minValue:0
      },
      isStacked:true	  
   };
   width = 550;
   height = 400;
}