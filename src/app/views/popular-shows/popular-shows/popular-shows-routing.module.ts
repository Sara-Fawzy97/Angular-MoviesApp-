import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopularShowsComponent } from '../popular-shows.component';

const routes: Routes = [{path:'',component:PopularShowsComponent},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PopularShowsRoutingModule { }
