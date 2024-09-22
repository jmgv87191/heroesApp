import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { delay, switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero';
import { CommonModule } from '@angular/common';
import {MatGridListModule, MatGridTile} from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import { HeroImagePipe } from '../../pipes/hero-image.pipe';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-hero-page',
  standalone: true,
  imports: [CommonModule,RouterLink,MatGridListModule,MatProgressSpinnerModule,
    MatGridTile,MatCardModule,HeroImagePipe,MatListModule,MatButtonModule

  ],
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
      delay(1000),
      switchMap(({id})=>this._heroService.getHeroById(id)),
    )
    .subscribe(hero =>{
      if (!hero)return this.router.navigate(['/heroes/list'])
      this.hero = hero;
    console.log({hero})
    return
    })

  }


  goBack(){
    this.router.navigate(['/heroes/list'])
  }

}
