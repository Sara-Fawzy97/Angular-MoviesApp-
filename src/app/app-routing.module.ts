import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneMovieComponent } from './views/one-movie/one-movie.component';
import { PopularMoviesComponent } from './views/popular-movies/popular-movies.component';
import { TrendingMediaComponent } from './views/trending-media/trending-media.component';
import { NowMoviesComponent } from './views/now-movies/now-movies.component';

import { OneShowComponent } from './views/one-show/one-show.component';
import { PopularShowsComponent } from './views/popular-shows/popular-shows.component';
import { AiringTodayShowsComponent } from './views/airing-today-shows/airing-today-shows.component';
import { TopRatedShowsComponent } from './views/top-rated-shows/top-rated-shows.component';
import { OnTvComponent } from './views/on-tv/on-tv.component';
import { TopRatedMoviesComponent } from './views/top-rated-movies/top-rated-movies.component';
import { UpComingMoviesComponent } from './views/up-coming-movies/up-coming-movies.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'movie',loadChildren:()=>import('./views/popular-movies/popular-movies/popular-movies.module').then(m=>m.PopularMoviesModule)},
  {path:'tvshows',loadChildren:()=>import('./views/popular-shows/popular-shows/popular-shows.module').then(m=>m.PopularShowsModule)},
  {path:'movie/:id/:title',loadChildren:()=>import('./views/one-movie/one-movie/one-movie.module').then(m=>m.OneMovieModule)},
  {path:'movie/now-playing',loadChildren:()=>import('./views/now-movies/now-movies/now-movies.module').then(m=>m.NowMoviesModule)},
  {path:'tvshow/:id/:title',loadChildren:()=>import('./views//one-show/one-show/one-show.module').then(m=>m.OneShowModule)},
  {path:'tvshow/airing-today',loadChildren:()=>import('./views/airing-today-shows/airing-today/airing-today.module').then(m=>m.AiringTodayModule)},
  {path:'tvshow/top-rated',loadChildren:()=>import('./views/top-rated-shows/top-shows/top-shows.module').then(m=>m.TopShowsModule)},
  {path:'tvshow/on-tv',loadChildren:()=>import('./views/on-tv/on-tv/on-tv.module').then(m=>m.OnTvModule)},
  {path:'movie/top-rated',loadChildren:()=>import('./views/top-rated-movies/top-movies/top-movies.module').then(m=>m.TopMoviesModule)},
  {path:'movie/upcoming',loadChildren:()=>import('./views/up-coming-movies/upcoming-movies/upcoming-movies.module').then(m=>m.UpcomingMoviesModule)},
  {path:'movies/:id/:name',loadChildren:()=>import('./views/genres/genres/genres.module').then(m=>m.GenresModule)},
  // {path:'movies/:key',loadChildren:()=>import('./views/searched-items/searched-module/searched-module.module').then(m=>m.SearchedModuleModule)},
  // {path:'shows/:key',loadChildren:()=>import('./views/searched-shows/searched-tv-module/searched-tv-module.module').then(m=>m.SearchedTvModuleModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
