import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs";
import { PredictionDto } from '../model/PredictionDto';

const httpOptions = {
    headers: new HttpHeaders({' Content-Type': ' application/json'})
}

@Injectable()
export class PredictionService {

    constructor(private http: HttpClient) { 
        
    }
    getPredictions(){
        return this.http.get<PredictionDto[]>('http://localhost:9090/api/bitcoin/prediction/findall')
    }

    createPredictions(start: number, end: number): Observable<PredictionDto> {
        let dto = new PredictionDto();
        dto.start = start;
        dto.end = end;
        return this.http.post<PredictionDto>('http://localhost:9090/api/bitcoin/createprediction/', dto)
    }
}