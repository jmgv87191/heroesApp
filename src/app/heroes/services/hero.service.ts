import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { catchError, Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { error } from 'node:console';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor( private http: HttpClient ) { }

  private baseUrl:string = environment.baseUrl


  getHeroes():Observable<Hero[]>{
    return this.http.get<Hero[]>(  this.baseUrl + "/"+ "heroes" )
  }

  getHeroById( id:string ):Observable<Hero | undefined>{
    return this.http.get<Hero>(`${ this.baseUrl }/heroes/${id}`)
    .pipe(
      catchError(error => of (undefined))
    )
  }

}
