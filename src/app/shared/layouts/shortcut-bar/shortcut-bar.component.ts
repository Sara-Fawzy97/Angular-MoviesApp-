import { Component, Input, OnInit } from '@angular/core';
import { faSearch, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { MoviesService } from '../../services/movies.service';
import { Genres } from 'src/app/Interfaces/genresInterface';
import { Media } from 'src/app/Interfaces/mediaInterface';
import { faPercent, faPlay } from '@fortawesome/free-solid-svg-icons';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shortcut-bar',
  templateUrl: './shortcut-bar.component.html',
  styleUrls: ['./shortcut-bar.component.css'],
})
export class ShortcutBarComponent implements OnInit {
  searchIcon = faSearch;
  arrowIcon = faPlay;
  genres: Genres[] = [];

  key: any;
  //to send the results to searchResult parent


  searchLoaded: boolean = false;
  faPercent = faPercent;

  votes: any;
  votingPercents: number[] = [];

  constructor(private movieService: MoviesService) {}
  // faSortDown=faSortDown

  

  getGenres() {
    this.movieService.moviesGenres().subscribe({
      next: (res: any) => {
        this.genres = res.genres;
        console.log(this.genres);
      },
    });
  }
  ngOnInit(): void {
    this.getGenres();
  }
}
