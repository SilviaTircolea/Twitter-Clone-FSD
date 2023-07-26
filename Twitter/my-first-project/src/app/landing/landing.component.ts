import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  @ViewChild('emailInput') emailInput!: ElementRef;

  email:any;
  constructor(private router: Router){
  }

  nav(value: string) {
  
    if (value === 'registration') {
      this.router.navigateByUrl('/registration');
    }
  }

  login(value: string,event: any | null = null){
    const emailValue = this.emailInput.nativeElement.value;
    console.log('Email:', emailValue);
    
      let name:any =emailValue.split('@')[0]
    localStorage.setItem('userName',name)
    event.preventDefault();
    this.router.navigateByUrl('/home');
  }


}
