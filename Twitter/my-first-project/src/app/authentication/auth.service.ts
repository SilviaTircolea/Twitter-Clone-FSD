import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../registration/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://example.com/api/auth';

  constructor(private http: HttpClient) {}

  loginUser(user: User): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, user);
  }
}
