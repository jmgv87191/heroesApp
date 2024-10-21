import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import {MatSidenavModule, MatSidenavContainer,} from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from '../../../auth/interfaces/user';

@Component({
  selector: 'app-layout-page',
  standalone: true,
  imports: [RouterOutlet,MatSidenavModule,CommonModule,MatToolbarModule,MatButtonModule, MatIconModule,
    MatListModule,RouterLink
  ],
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.css'
})
export class LayoutPageComponent {


  public sidebarItems = [
    {
      laber:'listado',
      icon: 'label',
      url:'./list'
    },
    {
      laber:'Añadir',
      icon: 'add',
      url:'./new-hero'
    },
/*     {
      laber:'Buscar',
      icon: 'search',
      url:'./search'
    },  */
  ]

  constructor( private authService:AuthService,
      private router: Router
  ){}

  get user():User | undefined{
    return this.authService.currentUSer
  }

  onLogout(){
    this.authService.logout();
    this.router.navigate(['/auth/login'])
  }



}
