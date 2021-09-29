import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/core/interfaces/User';
import { SuperHeroStorageService } from 'src/app/home/services/super-hero-storage.service';
import { SuperHerosService } from 'src/app/home/services/super-heros.service';
import { AuthService } from '../../services/auth.service';
import { UserStatusService } from '../../services/user-status.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userAndPassError:boolean = false;
  public sending:boolean=false;

  loginFormulario:FormGroup=this._builder.group({
    password:['react',[Validators.required]],
    email:['challenge@alkemy.org',[Validators.required,Validators.email]]
  });
  

  constructor(private superHerosService:SuperHerosService,private superHeroStorageService:SuperHeroStorageService,private authService:AuthService,private _builder:FormBuilder,private router:Router,private userStatusService:UserStatusService) {
    this.userStatusService.deleteUser();
   }  
           
  async login(){
    this.sending=true;
    this.superHeroStorageService.clearSuperHeros();    
      if (this.loginFormulario.valid) {
          let req = this.authService.login(this.loginFormulario.get("email").value,this.loginFormulario.get("password").value).then(async res=>{
            this.userAndPassError=false;
            //Para obtener la key de facebook para poder usar la api se debe ingresar a
            //https://superheroapi.com/ y colocarla en el siguiente objeto, en el caso que
            // no se pueda loguear por alguna razón quitar esta validacion.
            //Si ocurren probelas de Cors con utilizar la extensión para Chrome CORS Unblock 0.1.9
            let user:User={Token:res.data.token,Token_Facebook:"XXXXXXXXXX"};
            this.userStatusService.setUser(user); 
            
            //Al iniciar la aplicación obtengo 6 superheroes y los alamceno en una array en el sesion storage
            const sh1=await this.superHerosService.getSuperHero("1");//good    
            this.superHeroStorageService.addSuperHero(sh1.data);
                        
            const sh2=await this.superHerosService.getSuperHero("2");//good
            this.superHeroStorageService.addSuperHero(sh2.data);
        
            const sh3=await this.superHerosService.getSuperHero("3");//good
            this.superHeroStorageService.addSuperHero(sh3.data);
        
            const sh4=await this.superHerosService.getSuperHero("4");//bad
            this.superHeroStorageService.addSuperHero(sh4.data);
        
            const sh5=await this.superHerosService.getSuperHero("12");//bad
            this.superHeroStorageService.addSuperHero(sh5.data);
        
            const sh6=await this.superHerosService.getSuperHero("6");//bad
            this.superHeroStorageService.addSuperHero(sh6.data);


            this.router.navigate(['/home/superheros']);
          }).catch(error=>{
            this.userAndPassError=true;
            this.sending=false;
          });                                                          
      } else {
      this.sending=false;
        this.loginFormulario.markAllAsTouched();
      }      
    }

    ngOnInit() {
  }

}
