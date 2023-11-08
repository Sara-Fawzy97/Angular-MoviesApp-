import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopularShowsRoutingModule } from './popular-shows-routing.module';
import { PopularShowsComponent } from '../popular-shows.component';
import { SharedModModule } from 'src/app/shared/layouts/shared-mod/shared-mod.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SearchedTvModuleModule } from '../../searched-shows/searched-tv-module/searched-tv-module.module';


@NgModule({
  declarations: [PopularShowsComponent],
  imports: [
    CommonModule,
    PopularShowsRoutingModule,
    SharedModModule,
    NgxPaginationModule,
    SearchedTvModuleModule
  ]
})
export class PopularShowsModule { }
