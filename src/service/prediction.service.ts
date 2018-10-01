import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs";
import { PredictionDto } from '../model/PredictionDto';

const httpOptions = {
    headers: new HttpHeaders({' Content-Type': ' application/json'})
}

@Injectable()
export class PredictionService {

    constructor(private http: HttpClient) { }
    
    findAll(): Observable<PredictionDto[]>{
        return this.http.get<PredictionDto[]>('http://localhost:9090/api/bitcoin/prediction/findall');
    }
    getPrediction(startDate: number, endDate: number): Observable<PredictionDto>{
        return this.http.post<PredictionDto>('http://localhost:9090/api/bitcoin/createprediction/'+{{startDate}}+'/'+'{{endDate}});
    }
}