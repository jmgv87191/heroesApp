import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { catchError, map, Observable, of } from 'rxjs';
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

  getSuggestions(query:string):Observable<Hero[]>{
    return this.http.get<Hero[]>(  `${ this.baseUrl }/heroes?q=${query}` )
  }

  addHero( hero:Hero ):Observable<Hero>{
    return this.http.post<Hero>(  `${ this.baseUrl }/heroes`,hero )
  }

  updateHero( hero:Hero ):Observable<Hero>{
    if (!hero.id) throw Error('Hero is required')  
      return this.http.patch<Hero>(  `${ this.baseUrl }/heroes/${hero.id}`,hero )
    
  }

  deleteById( id:string ):Observable<boolean>{

      return this.http.delete(  `${ this.baseUrl }/heroes/${id}` )
      .pipe(
        catchError( err => of(false) ),
        map( resp => true )
      )
    
  }

}
