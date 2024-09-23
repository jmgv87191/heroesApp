import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Hero } from '../../interfaces/hero';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule,ReactiveFormsModule,
CommonModule

  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent {
  
  public searchInput = new FormControl('');
  public heroes: Hero[] = [];

  searcHero(){
    const value: string = this.searchInput.value || '';
  }

}
