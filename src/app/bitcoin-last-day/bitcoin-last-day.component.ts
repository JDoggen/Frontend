import { Component, OnInit } from '@angular/core';
import { BitcoinDailyDto } from '../model/BitcoinDailyDto';
import { BitcoinDailyService } from './service/BitcoinDaily.service';

@Component({
  selector: 'app-bitcoin-last-day',
  templateUrl: './bitcoin-last-day.component.html',
  styleUrls: ['./bitcoin-last-day.component.css']
})
export class BitcoinLastDayComponent implements OnInit {

  bitcoinLastDay: BitcoinDailyDto = new BitcoinDailyDto();

  constructor(private service: BitcoinDailyService) {
   }

  ngOnInit() {
    this.bitcoinLastDay.timeStamp = 200;
  }
  click(){
    this.service.getLastDay().subscribe( data =>{
      this.bitcoinLastDay = data;
    })
  }

}
