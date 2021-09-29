import { Injectable } from '@angular/core';
import axios from 'axios';

declare var require: any;



@Injectable({
  providedIn: 'root'
})
export class AuthService {
private token:string="";

constructor() {
 }

  async login(email:string,password:string){    
    var axios = require('axios');
    var FormData = require('form-data');
    var data = new FormData();

    data.append('email', email);
    data.append('password', password);

    var config = {
      method: 'post',
      url: 'http://challenge-react.alkemy.org/',      
      data : data
    };    
    return axios(config);   
}
 
}
