import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faPercent, faSearch } from '@fortawesome/free-solid-svg-icons';
import { MoviesService } from 'src/app/shared/services/movies.service';

@Component({
  selector: 'app-searched-shows',
  templateUrl: './searched-shows.component.html',
  styleUrls: ['./searched-shows.component.css']
})
export class SearchedShowsComponent implements OnInit {

  constructor(private movieService:MoviesService) { }

  @Output() searchEvent= new EventEmitter<boolean>()

  
  
  key: any;
  searchResults: any;
  searchLoaded: boolean = false;
  
  faPercent=faPercent
  searchIcon = faSearch;

  votes:any
  votingPercents:number[]=[]
  searchItems:any

     
  searchKey() {
    this.movieService.searchMedia(this.key).subscribe({
      next: (res: any) => {
        this.searchResults = res.results;
        console.log(this.searchResults);
        this.searchLoaded = true;

        this.searchEvent.emit(this.searchLoaded)

        for(let movie of this.searchResults){
          // console.log(movie.title)
          this.votes=movie.vote_average
          this.votingPercents.push(Math.round(this.votes*10))       
        }
      },
    });
  }

  ngOnInit(): void {
  }

}
