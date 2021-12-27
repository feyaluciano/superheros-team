import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SuperHero } from 'src/app/core/interfaces/SuperHero';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroStorageService {
private listSuperHeros:SuperHero[]=[];

public handlerSuperHero$: Subject<SuperHero[]>;

constructor() {
  this.handlerSuperHero$ = new Subject();
 }


public getHandlerSuperHero$(): Observable<SuperHero[]> {
  return this.handlerSuperHero$.asObservable(); 
}

addSuperHero(superHero: SuperHero){
  this.listSuperHeros
  this.listSuperHeros.push(superHero);
  sessionStorage.setItem('heroes',JSON.stringify(this.listSuperHeros));       
}



getlength(){
  return this.listSuperHeros.length;      
}

removeSuperHero(id: string){  
  const index=this.listSuperHeros.findIndex(x => x.id==id);
    if ((index > -1) && this.listSuperHeros.length > 1  ) {  //No permito 0 superheros
      this.listSuperHeros.splice(index, 1);
    }    
    sessionStorage.setItem('heroes',JSON.stringify(this.listSuperHeros));        
}

getSuperHeros(){
  return JSON.parse(sessionStorage.getItem('heroes'))
}

clearSuperHeros(){
  this.listSuperHeros= [];
  sessionStorage.setItem('heroes',null);
}

}
