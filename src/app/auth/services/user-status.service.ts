import { Injectable } from '@angular/core';
import { User } from 'src/app/core/interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UserStatusService {

  private user:User;

  constructor() { }
  
  getUser(){
    var user;
    var token="";
    try   
      {  
        this.user= JSON.parse(localStorage.getItem('userLoggedIn'));                 
        }        
      catch (Error)   
      {  
        this.user={Token:""};    
      }     
      return this.user;    
    }  
    async setUser(user:User){    
      var token="";
      try   
        {           
           localStorage.setItem('userLoggedIn',JSON.stringify(user));                 
          }        
        catch (Error)   
        {  
          this.user={Token:""};    
        }     
        return this.user;    
      }  
      deleteUser(){                 
            localStorage.setItem('userLoggedIn',null);                                 
        }    
  
  
  
  
  

}
