import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import { UserProfile } from '../interfaces';

@Injectable({
    providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  getUserProfile(): Observable<UserProfile> {
    return this.http.get<UserProfile>('/api/user/profile')
  }

  updateUserProfile(userProfile:UserProfile): Observable<UserProfile>{
    return this.http.post<UserProfile>('/api/user/update', userProfile)
  }

  getDoctors(): Observable<UserProfile[]> {
    return this.http.get<UserProfile[]>('/api/user/doctors')
  }
}