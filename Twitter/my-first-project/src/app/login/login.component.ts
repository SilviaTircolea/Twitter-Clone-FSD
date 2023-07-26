import { Component, OnInit } from '@angular/core';
import { UserService } from "../user/user.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) {
    this.email = '';
    this.password = '';
  }

  ngOnInit(): void {
    console.log('login component')
  }

  login(): void {
    if (!this.email || !this.password) {
      return;
    }

    const user = {
      email: this.email,
      password: this.password
    };

    this.userService.login(user).subscribe({
      next: () => {
      },
      error: () => {
      }
    });
  }

  goToLogin(): void {
    this.router.navigate(['/registration'])
      .then(() => {
        console.log('Navigation to login page successful');
      })
      .catch((error) => {
        // Handle navigation error
        console.error('Error occurred during navigation to login page:', error);
      });
  }
}
