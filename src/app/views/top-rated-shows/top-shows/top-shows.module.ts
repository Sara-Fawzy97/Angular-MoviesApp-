import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopShowsRoutingModule } from './top-shows-routing.module';
import { TopRatedShowsComponent } from '../top-rated-shows.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SharedModModule } from 'src/app/shared/layouts/shared-mod/shared-mod.module';
import { SearchedTvModuleModule } from '../../searched-shows/searched-tv-module/searched-tv-module.module';


@NgModule({
  declarations: [TopRatedShowsComponent],
  imports: [
    CommonModule,
    TopShowsRoutingModule,
    SharedModModule,
    NgxPaginationModule,
    SearchedTvModuleModule
  ],
  exports:[TopRatedShowsComponent]
})
export class TopShowsModule { }
