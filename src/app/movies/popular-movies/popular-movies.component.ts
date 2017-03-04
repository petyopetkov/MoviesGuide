import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';


@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})
export class PopularMoviesComponent implements OnInit {
  popularMovies: any[]
  IMG_BASE_URL: String = "https://image.tmdb.org/t/p/w500"

  constructor(private moviesServices: MoviesService) { }

  ngOnInit() {
    this.moviesServices.getMostPopular().subscribe((data: any) => {
      this.popularMovies = data.results
    })
  }

}
