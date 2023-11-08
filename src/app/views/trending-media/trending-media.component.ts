import { Component, OnInit } from '@angular/core';
import {  Media } from 'src/app/Interfaces/mediaInterface';
import { MoviesService } from 'src/app/shared/services/movies.service';

import {faPercent} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-trending-media',
  templateUrl: './trending-media.component.html',
  styleUrls: ['./trending-media.component.css']
})
export class TrendingMediaComponent implements OnInit {
medias:Media[]=[]
votes:any
votingPercents:number[]=[]

  class="default";
  selected:boolean=false;
visiblityclass='isHidden'; 


fade='fadeIn'

faPercent=faPercent;
  constructor(private moviesServies:MoviesService) { }

  getAlltrending(){
   
    this.moviesServies.getAllTrendingMovies().subscribe({
      next:(res:any)=>{
        this.medias=res.results
        console.log(this.medias)
        for(let media of this.medias){
         
          this.votes=media.vote_average
          this.votingPercents.push(Math.round(this.votes*10))
     
        } console.log(this.votingPercents)
      },
      error:(httpError:any)=>{
        console.log(httpError)
      }
    })
  }


getWeeklyTrending(){
  this.moviesServies.getWeeklytrending().subscribe({
    next:(res:any)=>{
      this.medias=res.results
      console.log(this.medias)
    }
  })
}



toggeledEvent(){

  if(this.class="default"){
    this.class="selected"
    // this.selected=true;
  }else{
    this.class="default"
    // this.selected=false;

  }
}


get isSelected(){
  if(this.class='selected'){
    return true;
  }else return false
}


  ngOnInit(): void {

    this.getAlltrending()
    // this.getWeeklyTrending()
  }

}
