import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnTvRoutingModule } from './on-tv-routing.module';
import { OnTvComponent } from '../on-tv.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SharedModModule } from 'src/app/shared/layouts/shared-mod/shared-mod.module';
import { SearchedTvModuleModule } from '../../searched-shows/searched-tv-module/searched-tv-module.module';


@NgModule({
  declarations: [OnTvComponent],
  imports: [
    CommonModule,
    OnTvRoutingModule,
    SharedModModule,
    NgxPaginationModule,
    SearchedTvModuleModule
  ]
})
export class OnTvModule { }
