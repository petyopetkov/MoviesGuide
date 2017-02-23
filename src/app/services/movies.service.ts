import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';

@Injectable()
export class MoviesService {

  constructor(private http: Http) { }

  getLatestMovie(): Observable<any> {
    return this.http.get("https://api.themoviedb.org/3/movie/latest?api_key=7ee6b56a617be162f65926c578d431ab&language=en-US")
      .map((responce: Response) => {
        return responce.json()
      }).catch(this.handleError)
  }

  handleError(error: Response) {
    return Observable.throw(error.statusText)
  }
}
