import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path:'registration',
    loadChildren: () => import('../registration/registration.module').then(m => m.RegistrationModule)
  },
  {
    path:'login',
    loadChildren: () => import('../login/login.module').then(m => m.LoginModule)
  },
  {
    path:'home',
    loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
