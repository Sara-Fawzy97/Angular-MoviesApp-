import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpcomingMoviesRoutingModule } from './upcoming-movies-routing.module';
import { UpComingMoviesComponent } from '../up-coming-movies.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SharedModModule } from 'src/app/shared/layouts/shared-mod/shared-mod.module';
import { MoviesService } from 'src/app/shared/services/movies.service';
import { SkeltenLoadingComponent } from 'src/app/shared/layouts/skelten-loading/skelten-loading.component';
import { ShortcutBarComponent } from 'src/app/shared/layouts/shortcut-bar/shortcut-bar.component';
import { SearchedModuleModule } from '../../searched-items/searched-module/searched-module.module';


@NgModule({
  declarations: [UpComingMoviesComponent],
  imports: [
    CommonModule,
    UpcomingMoviesRoutingModule,
    SharedModModule,
    NgxPaginationModule,
    SearchedModuleModule
  ],
   providers:[MoviesService],
  
})
export class UpcomingMoviesModule { }
