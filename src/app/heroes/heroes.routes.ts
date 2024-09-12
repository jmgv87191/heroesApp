import { Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { RegisterComponent } from '../auth/pages/register/register.component';

export const routes: Routes = [

    {
        path:'',
        component: LayoutPageComponent
    },
    {
        path:'register',
        loadComponent: ()=> import ('../auth/pages/register/register.component').then( m => m.RegisterComponent )
    }

];
