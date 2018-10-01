import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { DataService } from 'src/service/data.service';
import { BitcoinDataDto } from 'src/model/BitcoinDataDto';
import { DataPoint } from 'src/model/DataPoint';

@Component({
  selector: 'app-chartline',
  template: `
    <div [chart]="chartLine"></div>
  `
  
})
export class ChartLineComponent implements OnInit {
  data: BitcoinDataDto[];
  parsedData: Array<DataPoint>;
  startDateField;
  endDateField;


  constructor(private service: DataService) { }

  ngOnInit() {
  }

  getData(){
    this.service.getData(this.startDateField, this.endDateField).subscribe(
      data =>{ this.data = data;
      this.parseData();
    })
  }

  parseData(){
    this.parsedData = new Array();
    this.data.forEach(element => {
      let dataPoint = new DataPoint();
      dataPoint.x = new Date(element.timeStamp * 1000);
      dataPoint.y = element.close;
      this.parsedData.push(dataPoint);
       
      })
      this.chartLine.removeSerie(0);
      this.chartLine.addSerie({
        turboThreshold: 0,
        color: 'rgba(64, 120, 220, 1)',
        name: 'Bitcoin',
        data: this.parsedData,
    });
  }

   chartLine = new Chart({
    chart: {
      type: 'line',
      zoomType: 'x',
      backgroundColor: '#cdcdcd'
    },
    xAxis: {
      type: 'datetime',
      lineColor: '#000000',
      lineWidth: 1,
      dateTimeLabelFormats: {
        millisecond: '%H:%M:%S.%L',
        second: '%H:%M:%S',
        minute: '%H:%M',
        hour: '%H:%M',
        day: '%e. %b',
        week: '%e. %b',
        month: '%b \'%y',
      }
    },
    yAxis: {
      min: null,
      lineColor: '#000000',
      lineWidth: 1,
      title:{
        text: 'Close price'
      }
    },
    title: {
      text: 'Bitcoin Price',
    },
    credits: {
      enabled: false
    },
    legend: {
      enabled: false
    },

  }
  );

  
}