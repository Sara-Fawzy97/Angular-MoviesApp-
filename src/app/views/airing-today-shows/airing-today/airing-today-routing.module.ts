import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AiringTodayShowsComponent } from '../airing-today-shows.component';

const routes: Routes = [
  {path:'',component:AiringTodayShowsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AiringTodayRoutingModule { }
