/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { User } from 'src/app/core/interfaces/User';
import { AuthService } from './auth.service';

describe('Service: Auth', () => {

  let service: AuthService;
  
  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 9000;
    TestBed.configureTestingModule({
      providers: [AuthService]
    });


    service = new AuthService();

  });

  it('should ...', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
  
  it('should be an object user not null', (done: DoneFn) => {
    service.login("challenge@alkemy.org","react").then((res) => {
      let user:User={Token:res.data.token,Token_Facebook:"10226559024744508"};            
      expect(user).not.toBeNull();
      done();            
    });
  });


});
