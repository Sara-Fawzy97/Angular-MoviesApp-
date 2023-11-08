import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faPercent } from '@fortawesome/free-solid-svg-icons';
import { Media } from 'src/app/Interfaces/mediaInterface';
import { MoviesService } from 'src/app/shared/services/movies.service';

@Component({
  selector: 'app-now-movies',
  templateUrl: './now-movies.component.html',
  styleUrls: ['./now-movies.component.css']
})
export class NowMoviesComponent implements OnInit {

  movies:Media[]=[]

  page:number=1
  count:number=0
size:number=20
totalResults:any

 
votes:any
votingPercents:number[]=[]
faPercent=faPercent
dataLoaded:boolean=false
searchLoaded:any

receiveMessage($event:any){ 
  this.searchLoaded=$event
  console.log(this.searchLoaded)
  }

  constructor(private movieService:MoviesService,private route:ActivatedRoute) {}

    getAllPlayingMovies(){
      this.movieService.getNowPlayingMovie(this.page).subscribe({
      next:(res:any)=>{
      this.movies=res.results
      this.totalResults=res.total_results
      console.log(res.results)  
      for(let movie of this.movies){
        // console.log(movie.title)
        this.votes=movie.vote_average
        this.votingPercents.push(Math.round(this.votes*10))       
      }
      this.dataLoaded=true
  }
})
  }

  changeData(event:any){
  this.dataLoaded=false

    this.page=event
    this.getAllPlayingMovies()
}

  ngOnInit(): void {
    this.getAllPlayingMovies()
  }

}
