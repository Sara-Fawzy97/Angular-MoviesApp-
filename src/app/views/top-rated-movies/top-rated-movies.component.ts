import { Component, OnInit } from '@angular/core';
import { faPercent } from '@fortawesome/free-solid-svg-icons';
import { Media } from 'src/app/Interfaces/mediaInterface';
import { MoviesService } from 'src/app/shared/services/movies.service';

@Component({
  selector: 'app-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.css']
})
export class TopRatedMoviesComponent implements OnInit {

  movies:Media[]=[]
  
  votes:any
  votingPercents:number[]=[]

  page:number=1
  count:number=0
  size:number=20
  totalResults:any

  faPercent=faPercent
dataLoaded:boolean=false
searchLoaded:any

  constructor(private moviesService:MoviesService) { }

  receiveMessage($event:any){ 
    this.searchLoaded=$event
    console.log(this.searchLoaded)
    }

  getTopRatedMovie(){
    this.moviesService.getTopRatedMovies(this.page).subscribe({
      next:(res:any)=>{
        this.movies=res.results
        console.log(this.movies)
        this.totalResults=res.total_results
        
        for(let movie of this.movies){
          // console.log(movie.title)
          this.votes=movie.vote_average
          this.votingPercents.push(Math.round(this.votes*10))
        }
        this.dataLoaded=true
      }
    })
  }

    //for pagination
    changeData(event:any){
  this.dataLoaded=false

      this.page=event
      this.getTopRatedMovie()
  }

  ngOnInit(): void {

    this.getTopRatedMovie()
  }

}
