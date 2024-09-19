import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../interfaces/hero';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { HeroCardComponent } from '../../components/hero-card/hero-card.component';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [MatDividerModule, CommonModule, MatListModule,HeroCardComponent ],
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
