import { Component, OnInit } from '@angular/core';
import { faPercent } from '@fortawesome/free-solid-svg-icons';
import {Media} from 'src/app/Interfaces/mediaInterface';
import { TvShowsService } from 'src/app/shared/services/tv-shows.service';

@Component({
  selector: 'app-trending-tv-shows',
  templateUrl: './trending-tv-shows.component.html',
  styleUrls: ['./trending-tv-shows.component.css']
})
export class TrendingTvShowsComponent implements OnInit {

shows:Media[]=[]
class="default";
votes:any
votingPercents:number[]=[]
fade='fadeIn'

faPercent=faPercent;



  constructor(private tvShowsService:TvShowsService) { }


  getDailyTrending(){
    this.tvShowsService.getDailyTrendingShows().subscribe({
      next:(res:any)=>{
        this.shows=res.results
        console.log(this.shows)
        for(let show of this.shows){
          this.votes=show.vote_average
          this.votingPercents.push(Math.round(this.votes*10))
        }
      }
    })
  }

  getWeeklyTrending(){
    this.tvShowsService.getWeeklyTrendingShows().subscribe({
      next:(res:any)=>{
        this.shows=res.results
        console.log(this.shows)
      }
    })
  }



  toggeledEvent(){
    if(this.class='default'){
      this.class="selected"
    }else{this.class='default'}
  }

  ngOnInit(): void {
  this.getDailyTrending()
  }


}
