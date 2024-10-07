import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Publisher } from '../../interfaces/hero';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-new-page',
  standalone: true,
  imports: [MatDividerModule,MatCardModule,MatFormFieldModule,MatInputModule,MatSelectModule,
    MatButtonModule,MatIconModule,CommonModule, ReactiveFormsModule
  ],
  templateUrl: './new-page.component.html',
  styleUrl: './new-page.component.css'
})
export class NewPageComponent {

  public heroForm = new FormGroup({
    id:new FormControl<string>('',{ nonNullable:true }),
    superhero:new FormControl<string>(''),
    publisher:new FormControl<Publisher>( Publisher.DCComics ),
    alter_ego:new FormControl(''),
    first_appearance:new FormControl(''),                                     
    characters:new FormControl(''),
    alt_img:new FormControl(''),
  });

  public publishers = [
    {
      id:'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id:'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ]

  onSubmit(){
    console.log({
      formIsValid: this.heroForm.valid,
      value: this.heroForm.value,
    })
  }

}
