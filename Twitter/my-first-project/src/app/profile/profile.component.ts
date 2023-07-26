import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any = {
    name: '',
    profilePicture: '',
    bio: '',
    followers: 0,
    tweets: [],
    likedAndRetweetedTweets: []
  };

  isOwnProfile: boolean;
  isFollowing: boolean;
 userName:any
  constructor(private router: Router) {
    this.isOwnProfile = false;
    this.isFollowing = false;
  }

  ngOnInit(): void {
  this.userName = localStorage.getItem('userName')
  }



  goToLogin(): void {
    this.router.navigate(['/login'])
      .then(() => {
        // Navigation successful, perform additional actions if needed
        console.log('Navigation to login page successful');
      })
      .catch((error) => {
        // Handle navigation error
        console.error('Error occurred during navigation to login page:', error);
      });
  }
}
