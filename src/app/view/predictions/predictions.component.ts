import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-predictions',
  templateUrl: './predictions.component.html',
  styleUrls: ['./predictions.component.css']
})
export class PredictionsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    if(!(sessionStorage.getItem('loggedIn') == 'true')){
      this.router.navigate(['login']);
    }
  }

}
