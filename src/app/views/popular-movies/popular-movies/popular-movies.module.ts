import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopularMoviesRoutingModule } from './popular-movies-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PopularMoviesComponent } from '../popular-movies.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SharedModModule } from 'src/app/shared/layouts/shared-mod/shared-mod.module';
import { MoviesService } from 'src/app/shared/services/movies.service';
import { SearchedModuleModule } from '../../searched-items/searched-module/searched-module.module';
import { SearchedItemsComponent } from '../../searched-items/searched-items.component';


@NgModule({
  declarations: [PopularMoviesComponent, 
],
    
  imports: [
    CommonModule,
    PopularMoviesRoutingModule,
    SearchedModuleModule,
    SharedModModule,
    NgxPaginationModule,
  ],providers:[MoviesService]
})
export class PopularMoviesModule { }
