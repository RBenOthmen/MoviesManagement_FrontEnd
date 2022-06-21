import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http : HttpClient) { }

  getMovies () {
     return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=9721182da6bcea570927d3a8bc32cd52')
  }
}
