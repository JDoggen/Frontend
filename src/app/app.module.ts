import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BitcoinLastDayComponent } from './bitcoin-last-day/bitcoin-last-day.component';

@NgModule({
  declarations: [
    AppComponent,
    BitcoinLastDayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
