import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero';

@Component({
  selector: 'app-hero-page',
  standalone: true,
  imports: [],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css'
})
export class HeroPageComponent implements OnInit {

  public hero? :Hero;

  constructor( private _heroService:HeroService,
    private aRoute:ActivatedRoute,
    private router:Router

  ){}

  ngOnInit(): void {

    this.aRoute.params
    .pipe(
      switchMap(({id})=>this._heroService.getHeroById(id)),
    )
    .subscribe(hero =>{
      if (!hero)return this.router.navigate(['/heroes/list'])
      this.hero = hero;
    console.log({hero})
    return
    })

  }

}
