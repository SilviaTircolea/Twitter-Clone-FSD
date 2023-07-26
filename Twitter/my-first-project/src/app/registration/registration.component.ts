import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  name: string;
  email: string;
  password: string;

  days: number[] = Array.from({ length: 31 }, (_, i) => i + 1);
  months: { name: string, value: number }[] = [
    { name: 'January', value: 1 },
    { name: 'February', value: 2 },
    { name: 'March', value: 3 },
    { name: 'April', value: 4 },
    { name: 'May', value: 5 },
    { name: 'June', value: 6 },
    { name: 'July', value: 7 },
    { name: 'August', value: 8 },
    { name: 'September', value: 9 },
    { name: 'October', value: 10 },
    { name: 'November', value: 11 },
    { name: 'December', value: 12 }
  ];

  currentYear = new Date().getFullYear();
  years: number[] = Array.from({ length: this.currentYear - 1902 }, (_, i) => 1903 + i);

  constructor(private router: Router) {
    this.name = '';
    this.email = '';
    this.password = '';
  }

  register(): void {

    this.router.navigateByUrl('/landing');
  }
}
