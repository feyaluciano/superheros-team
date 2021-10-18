import { Component, OnInit } from '@angular/core';
import { Height } from 'src/app/core/interfaces/Height';
import { Powerstat } from 'src/app/core/interfaces/Powerstat';
import { SuperHero } from 'src/app/core/interfaces/SuperHero';
import { SuperHeroStorageService } from '../../services/super-hero-storage.service';
import { SuperHerosService } from '../../services/super-heros.service';

declare var Waypoint: any

@Component({
  selector: 'app-super-heros',
  templateUrl: './super-heros.component.html',
  styleUrls: ['./super-heros.component.scss']
})
export class SuperHerosComponent implements OnInit {
  public listSuperHeros:SuperHero[];
  public listPowerstats: Powerstat[]=[];

  public totalHeight: number;
  public totalWeight: number;

  public total

  constructor(private superHerosService:SuperHerosService, private superHeroStorageService:SuperHeroStorageService ) { }
  

  calculateHeigh(h:string){
    var cm;
    try {     
          cm=h.toString().split(",")[1];
          cm=cm.split(" ")[0];        
         } catch (e) {
             cm=0;
           }     
     this.totalHeight=this.totalHeight+parseFloat(cm);
  }

  calculateWeight(w:string){
    var ki;
    //alert(w)
    try {     
          ki=w.toString().split(",")[1];
          
          ki=ki.split(" ")[0];
          //alert(ki)        
         } catch (e) {
             ki=0;
           } 
           //alert(parseFloat(ki))    
     this.totalWeight=this.totalWeight+parseFloat(ki);
  }


  totalPowerstats(){ 
    //alert(this.listPowerstats.length)
    //Genero un array de poderes con su total, y lo ordeno por mayor   
    this.listPowerstats=[];
    let totalIntelligence=0;;
    let totalSpeed=0
    let totalDurability=0;
    let totalPower=0;
    let totalCombat=0;    
    let totalStrength=0;
    this.totalHeight=0;
    this.totalWeight=0;
    this.listSuperHeros.forEach(unsph => {      
      totalIntelligence=totalIntelligence + parseFloat(unsph.powerstats.intelligence.toString());
      totalStrength=totalStrength + parseFloat(unsph.powerstats.strength.toString());
      totalSpeed=totalSpeed + parseFloat(unsph.powerstats.speed.toString());
      totalDurability=totalDurability + parseFloat(unsph.powerstats.durability.toString());
      totalPower=totalPower + parseFloat(unsph.powerstats.power.toString());
      totalCombat=totalCombat + parseFloat(unsph.powerstats.combat.toString());
      
      //Calculo la altura por cm, por lo tanto tengo que quitar las pulgadas
      this.calculateHeigh(unsph.appearance.height); 
      //Calculo el peso por Kl, por lo tanto tengo que quitar las libras     
      this.calculateWeight(unsph.appearance.weight);      
    });

    const totalw=(  this.totalWeight/this.listSuperHeros.length  ).toFixed(2);
    this.totalWeight=parseFloat(totalw);
    

    const totalh=(  this.totalHeight/this.listSuperHeros.length  ).toFixed(2);
    this.totalHeight=parseFloat(totalh);

    let tmppowerstat={name:"Intelligence",amount:totalIntelligence,icon:"bi-emoji-smile"};
    this.listPowerstats.push(tmppowerstat);

    tmppowerstat={name:"Strength",amount:totalStrength,icon:"bi-journal-richtext"};
    this.listPowerstats.push(tmppowerstat);

    tmppowerstat={name:"Speed",amount:totalSpeed,icon:"bi-speedometer"};
    this.listPowerstats.push(tmppowerstat);

    tmppowerstat={name:"Durability",amount:totalDurability,icon:"bi-battery-half"};
    this.listPowerstats.push(tmppowerstat);

    tmppowerstat={name:"Power",amount:totalPower,icon:"bi-file-ppt-fill"};
    this.listPowerstats.push(tmppowerstat);

    tmppowerstat={name:"Combat",amount:totalCombat,icon:"bi-shield-fill"};
    this.listPowerstats.push(tmppowerstat);
    
    this.listPowerstats=this.listPowerstats.sort(function(a, b){return b.amount - a.amount});
    
  }

  async laodSuperHeros(){    
    this.listSuperHeros=await this.superHeroStorageService.getSuperHeros();       
    await this.totalPowerstats();
  }






  
  async ngOnInit() {   
    //Me subscribo a los cambios que haya en el array de superheroes, al recibir cambio actualizo el listado de superheroes
    // y los campos del panel superior.
    this.superHeroStorageService.getHandlerSuperHero$().subscribe(res=>{      
      this.laodSuperHeros();
    })    
    this.superHeroStorageService.handlerSuperHero$.next(this.listSuperHeros);          
  
  }

}
