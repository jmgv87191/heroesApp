import { Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';
import { authGuard } from './auth/guards/auth.guard';
import { auth2Guard } from './auth/guards/auth2.guard';


export const routes: Routes = [

    {
        path:'auth',
        loadChildren: ()=> import('./auth/auth.routes').then( m => m.routes )
    },

    {
        path:'heroes',
        loadChildren: ()=> import('./heroes/heroes.routes').then( m => m.routes ),
        canActivate:[ authGuard ]
    },
    {
        path:'404',
        component: Error404PageComponent
    },
    {
        path:'',
        pathMatch:'full',
        redirectTo:'heroes'
    },
    {
        path:'**',
        redirectTo:'404'
    }

];
