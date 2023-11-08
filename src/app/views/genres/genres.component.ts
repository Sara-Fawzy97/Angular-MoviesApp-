import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Media } from 'src/app/Interfaces/mediaInterface';
import { MoviesService } from 'src/app/shared/services/movies.service';
import {faPercent} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
  id:number=this.route.snapshot.params['id']
movies:Media[]=[]

dataLoaded:boolean=false
votingPercents:number[]=[]
faPercent=faPercent
votes:any



  constructor(private moviesService:MoviesService,private route:ActivatedRoute) { }

getMovies(){
this.moviesService.getmoviesByGenre(this.id).subscribe({
  next:(res:any)=>{
this.movies=res.results
console.log(this.movies)
this.dataLoaded=true

for(let movie of this.movies){
  // console.log(movie.title)
  this.votes=movie.vote_average
  this.votingPercents.push(this.votes*10)       
}
  }
})
}

  ngOnInit(): void {

    this.getMovies()
  }

}
