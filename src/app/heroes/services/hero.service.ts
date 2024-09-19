import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor( private http: HttpClient ) { }

  private baseUrl:string = environment.baseUrl


  getHeroes():Observable<Hero[]>{
    return this.http.get<Hero[]>(  this.baseUrl + "/"+ "heroes" )
  }

}
