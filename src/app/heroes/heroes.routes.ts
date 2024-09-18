import { Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';


export const routes: Routes = [

    {
        path:'',
        component: LayoutPageComponent
    },

    {
        path:'list',
        loadComponent: ()=> import ('./pages/list-page/list-page.component').then( m => m.ListPageComponent )
    },
    {
        path:'new',
        loadComponent: ()=> import('./pages/new-page/new-page.component').then(m => m.NewPageComponent)
    },
    {
        path:'edit/:id',
        loadComponent: ()=> import('./pages/new-page/new-page.component').then(m => m.NewPageComponent)
    },
    {
        path:'search',
        loadComponent: ()=> import('./pages/search-page/search-page.component').then(m => m.SearchPageComponent)
    },
    {
        path:':id',
        loadComponent: ()=> import ('./pages/hero-page/hero-page.component').then( m => m.HeroPageComponent )
    },
    {
        path:'**', redirectTo:'list'
    }

];
