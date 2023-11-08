import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchedModuleRoutingModule } from './searched-module-routing.module';
import { SearchedItemsComponent } from '../searched-items.component';
import { SharedModModule } from 'src/app/shared/layouts/shared-mod/shared-mod.module';
import { PopularMoviesComponent } from '../../popular-movies/popular-movies.component';
import { PopularMoviesModule } from '../../popular-movies/popular-movies/popular-movies.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SearchedItemsComponent,
    

  ],
  imports: [
    CommonModule,
    SearchedModuleRoutingModule,
    SharedModModule,
    FormsModule,
  
  ],exports:[SearchedItemsComponent]
})
export class SearchedModuleModule { }
