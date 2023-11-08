import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Media } from 'src/app/Interfaces/mediaInterface';
import{Production_countries}from'src/app/Interfaces/countriesInterface';
import { MoviesService } from 'src/app/shared/services/movies.service';

import { Genres } from 'src/app/Interfaces/genresInterface';

import {faBookmark,faHeart, faList, faPercent, faPlay, faStar} from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-one-movie',
  templateUrl: './one-movie.component.html',
  styleUrls: ['./one-movie.component.css']
})
export class OneMovieComponent implements OnInit {


  id:number=this.route.snapshot.params['id']
  movie:Media={}
  production_countries:Production_countries={}
  genres:Genres[]=[]
  votingPercent:any

  isLoaded:boolean=false

  
  constructor( private movieService:MoviesService, private route:ActivatedRoute) {}

  runtime:number=0;
  voting:number=0;
  arrowIcon=faPlay;
  listIcon= faList;
  faHeart=faHeart;
  faStar=faStar;
  faBookmark=faBookmark;
  faPercent=faPercent;

path="https://www.themoviedb.org/t/p/w1920_and_h800_face/"
  getOneMovie(){

    this.movieService.getOneMovie(this.id).subscribe({
      next:(res:any)=>{
        this.movie=res
        console.log(this.movie)
        this.production_countries=res.production_countries
        console.log(this.production_countries)
        this.genres=res.genres
        console.log(this.genres)
        let bookArray=Object.keys(this.production_countries)
        console.log(bookArray)
// this.runtime=this.movie.runtime
this.runtime=res.runtime /60
        console.log(this.runtime)

        this.voting=res.vote_average*10

        this.votingPercent=Math.round(this.voting)
        console.log(this.votingPercent)
this.isLoaded=true
      }
    })
  }



  ngOnInit(): void {
    this.getOneMovie()  }

}
