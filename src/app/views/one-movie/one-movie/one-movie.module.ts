import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OneMovieRoutingModule } from './one-movie-routing.module';
import { OneMovieComponent } from '../one-movie.component';
import { SharedModModule } from 'src/app/shared/layouts/shared-mod/shared-mod.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';


@NgModule({
  declarations: [OneMovieComponent],
  imports: [
    CommonModule,
    OneMovieRoutingModule,
    SharedModModule,
    NgxPaginationModule,
    NgxSkeletonLoaderModule.forRoot({animation:'pulse'}),
  ]
})
export class OneMovieModule { }
