import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneMovieComponent } from '../one-movie.component';

const routes: Routes = [
  {path:'',component:OneMovieComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OneMovieRoutingModule { }
