import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './shared/layouts/footer/footer.component';
import { TrendingTvShowsComponent } from './views/trending-tv-shows/trending-tv-shows.component';
import { HomeComponent } from './views/home/home.component';
import { TrendingMediaComponent } from './views/trending-media/trending-media.component';
import { PopularMoviesModule } from './views/popular-movies/popular-movies/popular-movies.module';
import { NowMoviesModule } from './views/now-movies/now-movies/now-movies.module';
import { PopularShowsModule } from './views/popular-shows/popular-shows/popular-shows.module';
import { OneMovieModule } from './views/one-movie/one-movie/one-movie.module';
import { UpcomingMoviesModule } from './views/up-coming-movies/upcoming-movies/upcoming-movies.module';
import { OneShowModule } from './views/one-show/one-show/one-show.module';
import { AiringTodayModule } from './views/airing-today-shows/airing-today/airing-today.module';
import { TopShowsModule } from './views/top-rated-shows/top-shows/top-shows.module';
import { OnTvModule } from './views/on-tv/on-tv/on-tv.module';
import { TopMoviesModule } from './views/top-rated-movies/top-movies/top-movies.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './shared/layouts/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { SharedModModule } from "./shared/layouts/shared-mod/shared-mod.module";
import { GenresComponent } from './views/genres/genres.component';
import { GenresModule } from './views/genres/genres/genres.module';
import { SkeltenLoadingComponent } from './shared/layouts/skelten-loading/skelten-loading.component';
import { SidebarComponent } from './shared/layouts/shows-shortcutBar/sidebar.component';
import { SearchedShowsComponent } from './views/searched-shows/searched-shows.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        TrendingMediaComponent,
        TrendingTvShowsComponent,
        FooterComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        PopularMoviesModule,
        NowMoviesModule,
        PopularShowsModule,
        OneMovieModule,
        OneShowModule,
        AiringTodayModule,
        TopShowsModule,
        OnTvModule,
        TopMoviesModule,
        HttpClientModule,
        FormsModule,
        GenresModule,
        SharedModModule,
        

    ]
})
export class AppModule {}
