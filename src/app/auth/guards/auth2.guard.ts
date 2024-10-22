import { CanMatchFn } from '@angular/router';

export const auth2Guard: CanMatchFn = (route, segments) => {

  console.log('can match')
/*   const authService = inject(AuthService)
 */
  return true};
