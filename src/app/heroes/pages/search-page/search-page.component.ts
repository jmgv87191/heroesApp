import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule,AsyncPipe } from '@angular/common';
import { Hero } from '../../interfaces/hero';
import { HeroService } from '../../services/hero.service';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatAutocompleteModule, MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule,ReactiveFormsModule,
CommonModule,MatAutocompleteModule

  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent {
  
  public searchInput = new FormControl('');
  public heroes: Hero[] = [];
  public selectedHero?:Hero;


  constructor( private _heroService:HeroService ){}

  searcHero(){
    const value: string = this.searchInput.value || '';

    this._heroService.getSuggestions( value ).subscribe( (data)=>{
      this.heroes = data
    } )

  }

  onSelectedOption( event: MatAutocompleteSelectedEvent ){

    if (!event.option.value) {
      this.selectedHero = undefined
      return;
    }
    const hero = event.option.value;
    this.searchInput.setValue( hero ) 

    this.selectedHero = hero;
  
  }

}
