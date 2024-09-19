import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { MatCardModule } from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { HeroImagePipe } from '../../pipes/hero-image.pipe';



@Component({
  selector: 'app-hero-card',
  standalone: true,
  imports: [MatCardModule, MatChipsModule,CommonModule,MatDividerModule,MatIconModule,MatButtonModule,
    RouterLink,HeroImagePipe

  ],
  templateUrl: './hero-card.component.html',
  styleUrl: './hero-card.component.css'
})
export class HeroCardComponent implements OnInit {

  @Input() hero!:Hero;

  ngOnInit(): void {
    
    if (!this.hero) throw Error( 'Hero property is required' )

  }



}
