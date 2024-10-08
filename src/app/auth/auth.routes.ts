import { Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [

    {
        path:'',
        component: LayoutPageComponent,
        children:[
            {
                path:'login',
                loadComponent: ()=>import ('./pages/login-page/login-page.component').then(m => m.LoginPageComponent)
            },
            {
                path:'new-account',
                loadComponent: ()=> import ('./pages/register/register.component').then( m => m.RegisterComponent )
            },
            {
                path:'**', redirectTo:'login', pathMatch:'full'
            }
        ]
    }


];

