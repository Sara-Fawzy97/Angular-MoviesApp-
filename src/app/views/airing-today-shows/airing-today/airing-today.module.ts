import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AiringTodayRoutingModule } from './airing-today-routing.module';
import { AiringTodayShowsComponent } from '../airing-today-shows.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SharedModModule } from 'src/app/shared/layouts/shared-mod/shared-mod.module';
import { SearchedTvModuleModule } from '../../searched-shows/searched-tv-module/searched-tv-module.module';


@NgModule({
    declarations: [AiringTodayShowsComponent,
    ],
    imports: [
        CommonModule,
        AiringTodayRoutingModule,
        SharedModModule,
        NgxPaginationModule,
        SearchedTvModuleModule
    ]
})
export class AiringTodayModule { }
