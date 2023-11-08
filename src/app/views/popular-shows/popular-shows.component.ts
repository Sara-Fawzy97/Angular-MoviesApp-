import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faPercent } from '@fortawesome/free-solid-svg-icons';
import { Media } from 'src/app/Interfaces/mediaInterface';
import { TvShowsService } from 'src/app/shared/services/tv-shows.service';

@Component({
  selector: 'app-popular-shows',
  templateUrl: './popular-shows.component.html',
  styleUrls: ['./popular-shows.component.css']
})
export class PopularShowsComponent implements OnInit {

  shows:Media[]=[]

  votes:any
votingPercents:number[]=[]
faPercent=faPercent

page:number=1
count:number=0
size:number=20
totalResults:any

dataLoaded:boolean=false

  constructor(private showService:TvShowsService,private route:ActivatedRoute) { }
  searchLoaded:any

  receiveMessage($event:any){ 
    this.searchLoaded=$event
    console.log(this.searchLoaded)
    }

getAllPopularShows(page:number){
  this.showService.getPopularShows(this.page).subscribe({
    next:(res:any)=>{
      this.shows=res.results
      console.log(this.shows)
      this.totalResults=res.total_results


      for(let show of this.shows){
   this.votes=show.vote_average
   this.votingPercents.push(Math.round(this.votes*10))
      }
      this.dataLoaded=true
    }
  })
}

changeData(event:any){
  this.dataLoaded=false
  this.page=event

  this.getAllPopularShows(this.page)
}

  ngOnInit(): void {
    this.getAllPopularShows(1)
  }

}
