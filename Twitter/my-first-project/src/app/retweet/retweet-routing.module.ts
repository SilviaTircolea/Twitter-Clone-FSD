import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RetweetComponent } from './retweet.component';

const routes: Routes = [
  {
    path:'',
    component:RetweetComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RetweetRoutingModule { }
