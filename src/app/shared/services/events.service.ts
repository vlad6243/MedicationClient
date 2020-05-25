import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Events } from '../interfaces'


@Injectable({
    providedIn: 'root'
})
export class EventsService {

    constructor(private http: HttpClient) {}
  
    getEvents(): Observable<Events[]> {
        return this.http.get<Events[]>('/api/event')
    }

    createEvent(event: Events): Observable<Events>{
    return this.http.post<Events>('/api/event/add',event)
    }
  
}