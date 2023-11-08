import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchedTvModuleRoutingModule } from './searched-tv-module-routing.module';
import { SharedModModule } from 'src/app/shared/layouts/shared-mod/shared-mod.module';
import { SearchedShowsComponent } from '../searched-shows.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [SearchedShowsComponent],
  imports: [
    CommonModule,
    SharedModModule,
    SearchedTvModuleRoutingModule,
    FormsModule,
  ],exports:[SearchedShowsComponent]
})
export class SearchedTvModuleModule { }
