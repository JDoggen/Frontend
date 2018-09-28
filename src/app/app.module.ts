import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BitcoinLastDayComponent } from './bitcoin-last-day/bitcoin-last-day.component';
import {HttpClientModule} from '@angular/common/http';
import {BitcoinDailyService} from '../service/BitcoinDaily.service';
@NgModule({
  declarations: [
    AppComponent,
    BitcoinLastDayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    BitcoinDailyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
