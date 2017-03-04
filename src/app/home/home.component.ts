import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  latestMovie: any

  constructor(private moviesServices: MoviesService) { }

  ngOnInit() {
    this.moviesServices.getLatestMovie().subscribe(data => {
      this.latestMovie = data
    })
  }

}
