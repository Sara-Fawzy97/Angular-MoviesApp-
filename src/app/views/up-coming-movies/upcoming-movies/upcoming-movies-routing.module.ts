import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpComingMoviesComponent } from '../up-coming-movies.component';

const routes: Routes = [
  {path:'',component:UpComingMoviesComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpcomingMoviesRoutingModule { }
