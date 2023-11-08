import { Component, Input, OnInit , Output, EventEmitter } from '@angular/core';
import { faPercent, faSearch } from '@fortawesome/free-solid-svg-icons';
import { MoviesService } from 'src/app/shared/services/movies.service';


@Component({
  selector: 'app-searched-items',
  templateUrl: './searched-items.component.html',
  styleUrls: ['./searched-items.component.css']
})
export class SearchedItemsComponent implements OnInit {


  key: any;
  searchResults: any;
  searchLoaded: boolean = false;

  faPercent=faPercent
  searchIcon = faSearch;

  @Output() searchEvent= new EventEmitter<boolean>()

votes:any
votingPercents:number[]=[]
  constructor( private movieService: MoviesService) { }
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
