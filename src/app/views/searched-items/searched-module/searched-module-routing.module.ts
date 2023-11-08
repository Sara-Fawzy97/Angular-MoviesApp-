import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchedItemsComponent } from '../searched-items.component';

const routes: Routes = [{path:'',component:SearchedItemsComponent},];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchedModuleRoutingModule { }
