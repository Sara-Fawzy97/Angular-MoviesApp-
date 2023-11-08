import { Component, OnInit } from '@angular/core';
import { faPercent } from '@fortawesome/free-solid-svg-icons';
import { Media } from 'src/app/Interfaces/mediaInterface';
import { TvShowsService } from 'src/app/shared/services/tv-shows.service';

@Component({
  selector: 'app-airing-today-shows',
  templateUrl: './airing-today-shows.component.html',
  styleUrls: ['./airing-today-shows.component.css']
})
export class AiringTodayShowsComponent implements OnInit {

  shows:Media[]=[]

  votes:any
  votingPercents:number[]=[]
  faPercent=faPercent

  page:number=1
count:number=0
size:number=20
totalResults:any

dataLoaded:boolean=false


searchLoaded:any

receiveMessage($event:any){ 
  this.searchLoaded=$event
  console.log(this.searchLoaded)
  }

  constructor(private tvShowsService:TvShowsService) { }

  getAllAiringShows(){
    this.tvShowsService.getAiringShows(this.page).subscribe({
      next:(res:any)=>{
        this.shows=res.results
        console.log(this.shows)
      this.totalResults=res.total_results

        for(let show of this.shows){
          this.votes=show.vote_average
          this.votingPercents.push(this.votes*10)
             }
             this.dataLoaded=true

      }
    })
  }
  changeData(event:any){
  this.dataLoaded=false

    this.page=event
    this.getAllAiringShows()
  }

  ngOnInit(): void {
    this.getAllAiringShows()
  }

}
