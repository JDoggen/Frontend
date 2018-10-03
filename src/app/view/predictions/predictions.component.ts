import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PredictionDto } from 'src/model/PredictionDto'
import { PredictionService } from 'src/service/prediction.service';


@Component({
  selector: 'app-predictions',
  templateUrl: './predictions.component.html',
  styleUrls: ['./predictions.component.css']
})
export class PredictionsComponent implements OnInit {

  constructor(private router: Router, private service: PredictionService) { }

  predictions : PredictionDto[];
  
  
  prediction : PredictionDto;
  start;
  end;

  ngOnInit() {
    if(!(sessionStorage.getItem('loggedIn') == 'true')){
      this.router.navigate(['login']);
    }
  }

  getPredictions(){
    this.service.getPredictions().subscribe(
      data =>{ this.predictions = data; 
    })
  } 
  createPrediction(){
    //let start = this.dateToUnix(this.start);
    //let end = this.dateToUnix(this.end);
    this.service.createPrediction(this.dateToUnix(this.start), this.dateToUnix(this.end)).subscribe(
      data =>{ this.prediction = data; 
      this.getPredictions();
    })
  }

  decimalFormat(data : number) : string{
    if(data==null){
      return "-";
    }
    return data.toFixed(2);
  }
  unixToDate(unix: number): Date{
    return new Date(unix * 1000);
  }

  dateToUnix(date: Date): number{
    return date.getTime() / 1000;
  }


}
