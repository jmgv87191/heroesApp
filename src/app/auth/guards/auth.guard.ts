import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {

  console.log('can activate')
/*   const authService = inject(AuthService)
 */
  return true


};
