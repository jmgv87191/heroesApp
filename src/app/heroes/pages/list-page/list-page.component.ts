import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../interfaces/hero';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [],
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css'
})
export class ListPageComponent implements OnInit {

  public heroes: Hero[] = []

  constructor( private _heroService:HeroService ){}

  ngOnInit(): void {
    this._heroService.getHeroes().subscribe((data)=>{

      this.heroes = data;

    }) 
  }



}
