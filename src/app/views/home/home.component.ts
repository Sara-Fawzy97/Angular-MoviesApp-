import { Component, OnInit } from '@angular/core';
import { faPercent } from '@fortawesome/free-solid-svg-icons';
import { MoviesService } from 'src/app/shared/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  key: any;
  searchResults: any;
  searchLoaded: boolean = false;
  faPercent=faPercent

votes:any
votingPercents:number[]=[]


  constructor(private movieService: MoviesService) {}

  searchKey() {
    this.movieService.searchMedia(this.key).subscribe({
      next: (res: any) => {
        this.searchResults = res.results;
        console.log(this.searchResults);
        this.searchLoaded = true;

        for(let movie of this.searchResults){
          // console.log(movie.title)
          this.votes=movie.vote_average
          this.votingPercents.push(Math.round(this.votes*10))       
        }
      },
    });
  }

  ngOnInit(): void {
    // this.searchKey()
  }
}
