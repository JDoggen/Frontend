import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs";
import { PredictionDto } from '../model/PredictionDto';

const httpOptions = {
    headers: new HttpHeaders({' Content-Type': ' application/json'})
}

@Injectable()
export class PredictionService {

    constructor() { 
        
    }
   
}