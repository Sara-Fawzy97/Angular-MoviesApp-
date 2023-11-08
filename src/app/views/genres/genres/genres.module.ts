import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenresRoutingModule } from './genres-routing.module';
import { GenresComponent } from '../genres.component';
import { SkeltenLoadingComponent } from 'src/app/shared/layouts/skelten-loading/skelten-loading.component';
import { SharedModModule } from 'src/app/shared/layouts/shared-mod/shared-mod.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MoviesService } from 'src/app/shared/services/movies.service';


@NgModule({
  declarations: [
    GenresComponent,
  ],
  imports: [
    CommonModule,
    SharedModModule,
    FontAwesomeModule,
    GenresRoutingModule,
  ],providers:[MoviesService]

})
export class GenresModule { }
