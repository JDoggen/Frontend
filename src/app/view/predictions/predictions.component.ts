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
  buttonDisabled = true;
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

  decimalFormat(data : number) : string{
    if(data==null){
      return "-";
    }
    return data.toFixed(2);
  }

  dateChange(){
    this.buttonDisabled = (this.start == null || this.end == null);
  }
}
