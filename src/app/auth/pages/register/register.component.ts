import { Component } from '@angular/core';
import {MatFormFieldModule,} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ MatFormFieldModule, MatButtonModule, MatDividerModule, MatIconModule,
    MatFormFieldModule, MatInputModule, MatSelectModule, MatCardModule, RouterLink
  ],  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
