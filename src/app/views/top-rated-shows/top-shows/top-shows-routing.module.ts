import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopRatedShowsComponent } from '../top-rated-shows.component';

const routes: Routes = [
  {path:'',component:TopRatedShowsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopShowsRoutingModule { }
