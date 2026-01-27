import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Media } from 'src/app/Interfaces/mediaInterface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  trendingUrl ='https://api.themoviedb.org/3/trending/all/'
  apiKey='?api_key=e3eb989751da8f50b437b44ab97b80ac'
  movies="https://api.themoviedb.org/3/movie/"
  popularMovis=this.movies+'popular'+this.apiKey+'&language=en-US&page='
  
  // movies:Movie[]
  constructor(private http:HttpClient) { }


  getAllTrendingMovies(){
    return this.http.get<Media[]>(this.trendingUrl+'day'+this.apiKey)
  }
  getWeeklytrending(){
    return this.http.get<Media[]>(this.trendingUrl+'week'+this.apiKey)
  }

  getPopularMovies(page:number){
    return this.http.get<Media[]>(this.popularMovis+page)
    
  }
  // https://api.themoviedb.org/3/movie/2?api_key=e3eb989751da8f50b437b44ab97b80ac&language=en-US
  getOneMovie(id:number){
    return this.http.get(this.movies+id+this.apiKey)
  }

  getNowPlayingMovie(page:number){
    return this.http.get<Media[]>(this.movies+"now_playing"+this.apiKey+'&language=en-US&page='+page)
  }

  getUpComingMovies(page:number){
    return this.http.get<Media[]>(this.movies+"upcoming"+this.apiKey+'&language=en-US&page='+page)
  }

  // https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1
  getTopRatedMovies(page:number){
    
    return this.http.get(this.movies+"top_rated"+this.apiKey+'&language=en-US&page='+page)
  }

  //https://api.themoviedb.org/3/search/multi?query=Dario+%C5%A0i%C5%A1ul&api_key=e3eb989751da8f50b437b44ab97b80ac

  searchMedia(key:any){
    return this.http.get('https://api.themoviedb.org/3/search/multi?query='+key+'&api_key=e3eb989751da8f50b437b44ab97b80ac')
  }

  //https://api.themoviedb.org/3/genre/movie/list?api_key=e3eb989751da8f50b437b44ab97b80ac&language=en-US
  moviesGenres(){
    return this.http.get('https://api.themoviedb.org/3/genre/movie/list'+this.apiKey+'&language=en-US')
  }

  getmoviesByGenre(id:number){
    return this.http.get('https://api.themoviedb.org/3/genre/'+id+'/movies'+this.apiKey)
  }
  
getMultiSearched(searchString:string){
  return this.http.get('https://api.themoviedb.org/3/search/movie'+this.apiKey+'&query='+searchString)
}
//https://api.themoviedb.org/3/search/movie?api_key=e3eb989751da8f50b437b44ab97b80ac&query=barbie
}
