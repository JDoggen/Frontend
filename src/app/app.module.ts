import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';

import { HttpClientModule} from '@angular/common/http';
import { UiSwitchModule } from 'ngx-toggle-switch';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartModule } from 'angular-highcharts';

import { BitcoinService } from '../service/bitcoin.service';
import { loginService } from '../service/login.service';
import { DataService } from '../service/data.service'


import { DatabaseHubComponent } from './view/database-hub/database-hub.component';
import { DatabaseChartComponent } from './view/database-chart/database-chart.component';
import { LoginComponent } from './view/login/login.component';
import { GraphsComponent } from './view/graphs/graphs.component';
import { DataComponent } from './view/data/data.component';
import { PredictionsComponent } from './view/predictions/predictions.component';
import { ChartComponent } from './view/chart/chart.component';




const appRoutes: Routes =[
  {path: '', component: DatabaseHubComponent},
  {path: 'login', component: LoginComponent},
  {path: 'graphs', component: GraphsComponent},
  {path: 'data', component: DataComponent},
  {path: 'predictions', component: PredictionsComponent}
  
];


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DatabaseHubComponent,
    DatabaseChartComponent,
    LoginComponent,
    GraphsComponent,
    DataComponent,
    PredictionsComponent,
    ChartComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    UiSwitchModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    ChartModule
  ],
  providers: [
    BitcoinService,
    loginService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
