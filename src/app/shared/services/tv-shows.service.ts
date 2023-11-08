import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Media } from 'src/app/Interfaces/mediaInterface';

@Injectable({
  providedIn: 'root'
})
export class TvShowsService {

  baseUrl="https://api.themoviedb.org/3/"
  apiKey='?api_key=e3eb989751da8f50b437b44ab97b80ac'

  constructor(private http:HttpClient) { }

  getDailyTrendingShows(){
    return this.http.get<Media[]>(this.baseUrl+"trending/tv/day"+this.apiKey)
  }

  getWeeklyTrendingShows(){
    return this.http.get<Media[]>(this.baseUrl+"trending/tv/week"+this.apiKey)
  }

  getOneShow(id:number){
    return this.http.get(this.baseUrl+'tv/'+id+this.apiKey)
  }

  getPopularShows(page:number){
    return this.http.get(this.baseUrl+'tv/popular'+this.apiKey+'&language=en-US&page='+page)
  }

  getAiringShows(page:number){
    return this.http.get(this.baseUrl+'/tv/airing_today'+this.apiKey+'&language=en-US&page='+page)
  }
  getTopRated(page:number){
    return this.http.get(this.baseUrl+'tv/top_rated'+this.apiKey+'&language=en-US&page='+page)
  }

  getOnTv(page:number){
    return this.http.get(this.baseUrl+'tv/on_the_air'+this.apiKey+'&language=en-US&page='+page)
  }
  getTvSearched(searchString:string){
    return this.http.get('https://api.themoviedb.org/3/search/tv'+this.apiKey+'&query=$'+searchString)
  }
  
}
