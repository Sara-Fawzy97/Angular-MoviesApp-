import { Component, OnInit } from '@angular/core';
import {faPlus,faBell,faArrowCircleRight} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  plusIcon=faPlus;
  bellIcon=faBell;
  faArrowRight=faArrowCircleRight;
  
  constructor() { }

  ngOnInit(): void {
  }

}
