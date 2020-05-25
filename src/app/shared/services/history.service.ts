import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Diagnosis } from '../interfaces';

@Injectable({
    providedIn: 'root'
})
export class HistoryService {

    constructor(private http: HttpClient) {}


    getDiagnosis(): Observable<Diagnosis[]> {
          return this.http.get<Diagnosis[]>('/api/diagnosis')
    }

    createBlog(diagosis: Diagnosis): Observable<Diagnosis>{
        return this.http.post<Diagnosis>('/api/diagnosis/add',diagosis)
    }
  
}