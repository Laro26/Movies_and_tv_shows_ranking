import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import {Movies} from './componentes/Interface/movies.interface';
import {Series} from './componentes/Interface/series'
import {environment} from '../environments/environment';
import { Observable,throwError } from 'rxjs';
import {catchError,tap} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ApiService {
 private pelisUrl='';

  constructor( private http: HttpClient) { }

 /* getMovies():Observable <Movies []>{
    return this.http.get<Movies[]>(this.pelisUrl).pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
    );
  }
  private handleError(err: HttpErrorResponse){
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }*/
  searchMovies(query: string,page: number){
    return this.http.get<Movies[]>(`${environment.baseUrlAPI}query=${query}&page=${page}`);
  }
  getDetails(movie_id:number){
    return this.http.get<Movies>(`${environment.baseUrlAPIid}/${movie_id}?api_key=485d67ef1381674ce7e2e5fde2c99463&language=en-US`)
  }
  getDetailsActors(movie_id:number){
    return this.http.get<Movies>(`${environment.baseUrlAPIid}/${movie_id}/credits?api_key=485d67ef1381674ce7e2e5fde2c99463&language=en-US`)
  }

  searchSeries(query: string,page: number){
    return this.http.get<Series[]>(`${environment.baseUrlAPI2}query=${query}&page=${page}`);
  }
  getDetailsSeries(tv_id:number){
    return this.http.get<Series>(`${environment.baseUrlAPI2id}/${tv_id}?api_key=485d67ef1381674ce7e2e5fde2c99463&language=en-US`)
  }
}
