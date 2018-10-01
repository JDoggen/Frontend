import { Component, OnInit } from '@angular/core';
import { Chart, Highcharts } from 'angular-highcharts';
import { DataService } from 'src/service/data.service';
import { BitcoinDataDto } from 'src/model/BitcoinDataDto';
import { Candlestick } from 'src/model/Candlestick';

@Component({
  selector: 'app-chartcandlestick',
  template: `
    <div [chart]="chartCandlestick"></div>
  `
  
})
export class chartCandlestickComponent implements OnInit {
  data: BitcoinDataDto[];
  parsedDataMinute: Array<Candlestick>;
  startDateField;
  endDateField;


  constructor(private service: DataService) { 
  }

  ngOnInit() {
  }

  getData(){
    this.service.getData(this.startDateField, this.endDateField).subscribe(
      data =>{ this.data = data;
      this.parseData();
    })
  }

  zoom(zoomEvent){
  }

  parseData(){
    this.parsedDataMinute = new Array();
    this.data.forEach(element => {
      let candlestick = new Candlestick();
      candlestick.x = new Date(element.timeStamp * 1000);
      candlestick.close = element.close;
      candlestick.high = element.high;
      candlestick.open = element.open;
      candlestick.low = element.low;
      this.parsedDataMinute.push(candlestick);
       
      })
      this.chartCandlestick.removeSerie(0);
      this.chartCandlestick.addSerie({
        turboThreshold: 0,
        type: 'candlestick',
        name: 'Bitcoin',
        data: this.parsedDataMinute,
      })
  }
  
   chartCandlestick = new Chart(
     {
    
    chart: {
      type: 'candlestick',
      zoomType: 'x',
      backgroundColor: '#cdcdcd',
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
      },
      events:{
        setExtremes:()=>this.zoom(event)
      }
    },
    yAxis: {
      min: null,
      lineColor: '#000000',
      lineWidth: 1,
      title:{
        text: 'Price USD'
      }
    },

    
    title: {
      text: 'Bitcoin Candlestick',
    },

    credits: {
      enabled: false
    },

    legend: {
      enabled: false
    }, 
    
  }); 
}