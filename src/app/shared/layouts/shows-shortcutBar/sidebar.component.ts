import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {faPlay, faSearch} from '@fortawesome/free-solid-svg-icons';
import { MoviesService } from '../../services/movies.service';
import { TvShowsService } from '../../services/tv-shows.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  

  
  arrowIcon=faPlay;

  classStatus='not-active';
  activeClass="not-active";
  activeStatus="not-active";

  key: any;


  constructor(private tvShowsService:TvShowsService) { }

  

  fSection(){
    
    this.classStatus='active'
  }

  sSection(){
    this.activeClass='activeClass'

  }
  tSection(){
    this.activeStatus='activated'

  }

  ngOnInit(): void {
  }

}
