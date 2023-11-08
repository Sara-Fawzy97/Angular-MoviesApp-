import { Production_countries } from "./countriesInterface";
import { Genres } from "./genresInterface";

export interface Media{
    id?:number,
    tagline?:string,
    title?:string,
    name?:string,
    runtime?:number,
    original_language?:string,
    adult?:boolean,
    original_title?:string,
    overview?:string,
    media_type?:string,
    genre_ids?:[],
    genres?:{},
    popularity?:number,
    release_date?:Date,
    first_air_date?:Date,
    video?:boolean,
vote_average?: number,
vote_count?:number,
poster_path?:string,
backdrop_path?:string,
production_countries?:[]
}