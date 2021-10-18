/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SuperHeroHomeComponent } from './super-hero-home.component';
import { Imagen } from 'src/app/core/interfaces/Image';
import { Powerstats } from 'src/app/core/interfaces/Powerstats';
import { Biography } from 'src/app/core/interfaces/Biography';
import { Appearance } from 'src/app/core/interfaces/Appearance';
import { Work } from 'src/app/core/interfaces/Work';
import { Connections } from 'src/app/core/interfaces/Connections';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('SuperHeroHomeComponent', () => {
  let component: SuperHeroHomeComponent;
  let fixture: ComponentFixture<SuperHeroHomeComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [NgbModule],
      declarations: [ SuperHeroHomeComponent ],
      providers:[NgbActiveModal]
    })
    .compileComponents();
  }));

  beforeEach(async () => {
    //GENERA EL COMPONENTE PERO CON INFO ADICIONAL PARA SU TESTEO
    fixture = TestBed.createComponent(SuperHeroHomeComponent); 

    component = fixture.componentInstance;
        
    const imagen:Imagen={"url":"https://lucianoferrari.com.ar/img/programador.png"};
    const powerstats:Powerstats={intelligence: 10,strength: 10,speed: 10,durability: 10,power: 10,combat: 10}
    const biography:Biography={full_name:"the biography"};
    const appearance:Appearance={gender:"M"};
    const work: Work={occupation:"the_ocupation"};
    const connections: Connections={group_affiliation:""};
    component.hero={id:"1",response:"",name:"unsuperhero",powerstats:powerstats,biography:biography,appearance,work:work,connections:connections,image:imagen}    

    fixture.detectChanges();
  });

  it('should create', async () => {    
    expect(component).toBeTruthy();
  });
  

 


});
