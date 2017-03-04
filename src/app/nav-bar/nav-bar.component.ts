import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
//import { JQ_TOKEN } from '../common/jQuery.service';
//import * as $ from 'jquery';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // ngAfterViewInit(){
  //   $('.navbar-nav li a').click(function(){
  //     $(this).addClass('active');
  //   })
  // }
  
}
