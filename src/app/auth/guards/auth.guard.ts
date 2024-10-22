import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs';



export const authGuard: CanActivateFn = (route, state) => {
  
  
  const authService = inject( AuthService );
  const router = inject( Router );

  console.log('can activate')

  return authService.checkAuthentication()
  .pipe(
    tap( isAuthenticated => console.log('Autenticated', isAuthenticated) ),
    tap( isAuthenticated => {
      if (!isAuthenticated) {
        router.navigate(['./auth/login'])
      }
  }),
  )

};
