import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration.component';

const routes: Routes = [
  { 
    path: '', 
    component: RegistrationComponent
  },
  { 
    path: 'landing', 
    loadChildren: () => import('../landing/landing.module').then(m => m.LandingModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
