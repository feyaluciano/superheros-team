import { Injectable } from '@angular/core';
import { UserStatusService } from 'src/app/auth/services/user-status.service';
import { User } from 'src/app/core/interfaces/User';
declare var require: any
@Injectable({
  providedIn: 'root',
})
export class SuperHerosService {
  public userLogged: User;
  private listSuperHeros=[];

  constructor(private userStatusService: UserStatusService) {
    this.userLogged = userStatusService.getUser();
  }
  
  getSuperHero(id: string) {
    var axios = require('axios');

    var config = {
      method: 'get',
      url:
        'https://superheroapi.com/api/' +
        this.userLogged.Token_Facebook +
        '/' +
        id,
        headers: {   
          
        },
    };
    return axios(config);      
  }
}
