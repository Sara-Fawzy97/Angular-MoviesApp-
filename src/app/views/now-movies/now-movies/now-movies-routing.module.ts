import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NowMoviesComponent } from '../now-movies.component';

const routes: Routes = [  {path:'',component:NowMoviesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NowMoviesRoutingModule { }
