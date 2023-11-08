import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnTvComponent } from '../on-tv.component';

const routes: Routes = [
  {path:'',component:OnTvComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnTvRoutingModule { }
