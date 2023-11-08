import { Component, OnInit } from '@angular/core';
import { TvShowsService } from 'src/app/shared/services/tv-shows.service';
import { Media } from 'src/app/Interfaces/mediaInterface';
import { ActivatedRoute } from '@angular/router';
import { Genres } from 'src/app/Interfaces/genresInterface';
import { faBookmark, faHeart, faList, faPercent, faPlay, faStar } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-one-show',
  templateUrl: './one-show.component.html',
  styleUrls: ['./one-show.component.css']
})
export class OneShowComponent implements OnInit {
  id:number=this.route.snapshot.params['id']

show:Media={}
genres:Genres[]=[]
runtime:number=0;
votingPercent:any
voting:number=0;

isLoaded:boolean=false

arrowIcon=faPlay;
  listIcon= faList;
  faHeart=faHeart;
  faStar=faStar;
  faBookmark=faBookmark;
  faPercent=faPercent;

  //                        url('/t/p/w1920_and_h800_multi_faces/zJNEXWx3YyWGQioCbutFd5dcNYS.jpg')

path="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces"


  constructor(private tvShowService:TvShowsService ,private route:ActivatedRoute) { }

getOneShow(){
  this.tvShowService.getOneShow(this.id).subscribe({
    next:(res:any)=>{
      this.show=res
      console.log(this.show)

      this.genres=res.genres

this.runtime=res.runtime /60
this.voting=res.vote_average*10

this.votingPercent=Math.round(this.voting)
console.log(this.votingPercent)
this.isLoaded=true
       }
  })
}

  ngOnInit(): void {

    this.getOneShow()
  }

}
