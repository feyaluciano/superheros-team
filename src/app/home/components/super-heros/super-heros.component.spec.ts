/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SuperHerosComponent } from './super-heros.component';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { SuperHero } from 'src/app/core/interfaces/SuperHero';
import { Powerstat } from 'src/app/core/interfaces/Powerstat';
import { Connections } from 'src/app/core/interfaces/Connections';
import { Imagen } from 'src/app/core/interfaces/Image';
import { Powerstats } from 'src/app/core/interfaces/Powerstats';
import { Biography } from 'src/app/core/interfaces/Biography';
import { Appearance } from 'src/app/core/interfaces/Appearance';
import { Work } from 'src/app/core/interfaces/Work';
import { SuperHeroHomeComponent } from '../super-hero-home/super-hero-home.component';

describe('SuperHerosComponent', () => {
  let component: SuperHerosComponent;
  let fixture: ComponentFixture<SuperHerosComponent>;


  let listSuperHeros:SuperHero[]=[];
  let listPowerstats: Powerstat[]=[];

  let totalHeight: number=0;
  let totalWeight: number;

  let total=0;

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [ SharedModule,NgbModule],
      declarations: [ SuperHerosComponent,SuperHeroHomeComponent ],
      providers:[NgbActiveModal]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperHerosComponent);
    component = fixture.componentInstance;


    component.listSuperHeros=listSuperHeros;
    
    let apower:Powerstat={name: "weight",amount: 100,icon: "icon.png"};
    listPowerstats.push(apower);
    component.listPowerstats=listPowerstats;


    const imagen:Imagen={"url":"https://lucianoferrari.com.ar/img/programador.png"};
    const powerstats:Powerstats={intelligence: 10,strength: 10,speed: 10,durability: 10,power: 10,combat: 10}
    const biography:Biography={full_name:"the biography"};
    const appearance:Appearance={gender:"M"};
    const work: Work={occupation:"the_ocupation"};
    const connections: Connections={group_affiliation:""};
    let  superHero:SuperHero={id:"1",response:"",name:"unsuperhero",powerstats:powerstats,biography:biography,appearance,work:work,connections:connections,image:imagen}    ;
    listSuperHeros[0]=superHero;
    component.listSuperHeros=listSuperHeros;


    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
