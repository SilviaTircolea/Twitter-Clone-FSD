import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar.component';

const routes: Routes = [
  {
    path:'',
    component:NavbarComponent
  },
  { 
    path: 'landing', 
    loadChildren: () => import('../landing/landing.module').then(m => m.LandingModule)
  },
  { 
    path: 'profile', 
    loadChildren: () => import('../profile/profile.module').then(m => m.ProfileModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavbarRoutingModule { }
