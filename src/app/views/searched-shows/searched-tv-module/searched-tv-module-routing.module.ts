import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchedShowsComponent } from '../searched-shows.component';

const routes: Routes = [{path:'',component:SearchedShowsComponent},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchedTvModuleRoutingModule { }
