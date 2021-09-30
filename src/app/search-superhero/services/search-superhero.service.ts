import { Injectable } from '@angular/core';
import { UserStatusService } from 'src/app/auth/services/user-status.service';
import { SuperHero } from 'src/app/core/interfaces/SuperHero';
import { User } from 'src/app/core/interfaces/User';
declare var require: any
@Injectable({
  providedIn: 'root'
})
export class SearchSuperheroService {
  public userLogged: User;  
constructor(private userStatusService: UserStatusService) {
  this.userLogged = userStatusService.getUser();
 }
 getSuperHeros(name: string) {
  var axios = require('axios');

  var config = {
    method: 'get',
    url:
      'https://superheroapi.com/api/' +
      this.userLogged.Token_Facebook +
      '/search/' +
      name,
      headers: {                 
      },
  };
  return axios(config);      
}

}
