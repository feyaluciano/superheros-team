import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserStatusService } from 'src/app/auth/services/user-status.service';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UserLoggedinGuardService implements CanActivate {

constructor(private router: Router,private userStatusService:UserStatusService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   
    const user:User=this.userStatusService.getUser();
    if ( user.Token=="") {         
      this.router.navigate(['#/auth/login'],{
          queryParams:{returnUrl:state.url}
      });
      return false;
    }
    return true;

  }

}
