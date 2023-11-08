import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneShowComponent } from '../one-show.component';

const routes: Routes = [
  {path:'',component:OneShowComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OneShowRoutingModule { }
