import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NowMoviesRoutingModule } from './now-movies-routing.module';
import { NowMoviesComponent } from '../now-movies.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SharedModModule } from 'src/app/shared/layouts/shared-mod/shared-mod.module';
import { SearchedModuleModule } from '../../searched-items/searched-module/searched-module.module';


@NgModule({
  declarations: [
    NowMoviesComponent],
  imports: [
    CommonModule,
    NowMoviesRoutingModule,
    SharedModModule,
    NgxPaginationModule,
    SearchedModuleModule

  

  ]
})
export class NowMoviesModule { }
