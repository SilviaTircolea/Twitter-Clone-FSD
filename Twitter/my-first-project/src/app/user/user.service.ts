import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://your-api-url';

  constructor(private http: HttpClient) { }

  register(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/users/register`, user);
  }
  login(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/users/login`, user);

  }
}
