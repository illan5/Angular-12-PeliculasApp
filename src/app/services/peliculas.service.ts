import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

 
 
@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
 
  private apikey: string = '1efe474f7a1d8e368be2c74c834d2860';
  private urlMoviedb: string = 'https://api.themoviedb.org/3';
 
  constructor( private http : HttpClient) { }
 
  getPopulares(){
    let url = `${ this.urlMoviedb }discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es`;
    return this.http.get( url ).pipe(map( (res: any) => res.results));
  }
}