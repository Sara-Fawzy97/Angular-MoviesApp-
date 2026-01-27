import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Media } from 'src/app/Interfaces/mediaInterface';
import { MoviesService } from 'src/app/shared/services/movies.service';
import {faPercent, faSearch} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-popular-movies',
  templateUrl:'./popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})
export class  PopularMoviesComponent implements OnInit {

movies:Media[]=[]

visibile:boolean=false

votes:any
votingPercents:number[]=[]

faPercent=faPercent
searchIcon = faSearch;


page:number=1
count:number=0
size:number=20
totalResults:any

searchLoaded:any
key: any;
//to send the results to searchResult parent

searchResults:[]=[]

dataLoaded:boolean=false

  constructor(private movieService:MoviesService,private route:ActivatedRoute) { }

  receiveMessage($event:any){ 
this.searchLoaded=$event
console.log(this.searchLoaded)
}


  getAllPopularMovies(){
    // console.log(this.page)
    this.movieService.getPopularMovies(this.page).subscribe({
      next:(res:any)=>{
        this.movies=res.results
        console.log(this.movies);
        this.totalResults=res.total_results
        
        for(let movie of this.movies){
          // console.log(movie.title)
          this.votes=movie.vote_average
          this.votingPercents.push(Math.round(this.votes*10))       
        }
        console.log(this.votingPercents)
      this.dataLoaded=true
        
      }
    })
  }

  // searchKey() {
  //   this.movieService.getMultiSearched(this.key).subscribe({
  //     next: (res: any) => {
  //       this.searchResults = res.results;
  //   // this.searchEvent.emit(this.searchResults);

  //       console.log(this.searchResults);
     
  //     },
  //   });
  // }
//for pagination
  changeData(event:any){
  this.dataLoaded=false

      this.page=event
      this.getAllPopularMovies()
  }


  ngOnInit(): void {
    this.getAllPopularMovies()
    
  }

}
