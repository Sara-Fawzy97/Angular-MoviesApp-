import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OneShowRoutingModule } from './one-show-routing.module';
import { OneShowComponent } from '../one-show.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SharedModModule } from 'src/app/shared/layouts/shared-mod/shared-mod.module';


@NgModule({
  declarations: [OneShowComponent],
  imports: [
    CommonModule,
    OneShowRoutingModule,
    SharedModModule,
    NgxPaginationModule,
    NgxSkeletonLoaderModule.forRoot({animation:'pulse'}),
  ]
})
export class OneShowModule { }
