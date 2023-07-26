import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TweetService {
  private apiUrl = 'http://your-api-url';

  constructor(private http: HttpClient) { }

  getFeed(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/feed`);
  }

  postTweet(tweet: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/tweets`, tweet);
  }

  likeTweet(tweetId: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/tweets/${tweetId}/like`, {});
  }

  retweet(tweetId: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/tweets/${tweetId}/retweet`, {});
  }
  goToLogin(): void {
    const registerLink = document.getElementById('register-link');
    const registrationForm = document.getElementById('registration-form');

    if (registerLink && registrationForm) {
      registerLink.addEventListener('click', () => {
        registrationForm.classList.toggle('hidden');
      });
    }
  }

}
