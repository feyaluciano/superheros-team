/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HttpClientTestingModule } from '@angular/common/http/testing';


import { LoginComponent } from './login.component';
import { FormBuilder, Validators } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthModule } from '../../auth.module';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { LateralMenuComponent } from 'src/app/shared/components/lateral-menu/lateral-menu.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let  _builder:FormBuilder=new FormBuilder();

  beforeEach((async () => {
    await TestBed.configureTestingModule({
      imports: [
        
        AuthModule,
        
        HttpClientTestingModule,  
        RouterTestingModule.withRoutes([]),
        
        
        
      ],
      declarations: [
        LoginComponent
      ],
      providers: [ NgbActiveModal              
      ],
    }).compileComponents();

 



  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

   //component.ngOnInit();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 
  it('should detect form is invalid', async () => {
    //DEBE SER FALSO PORQUE EL FORM NO TIEN CARGADO VALORES EN LOS INPUTS
    await fixture.nativeElement.querySelector('#loggin_button').click();    
    expect(component.loginFormulario.invalid).toBeTruthy();
  });


  it('should detect form is valid', async () => { 
    //INVALIDO ES IGUAL A FALSO PORQUE LOS CAMPOS INGRESADOS SON VALIDOS
    component.loginFormulario=_builder.group({
      password:['react',[Validators.required]],
      email:['challenge@alkemy.org',[Validators.required,Validators.email]]
    });
   // await fixture.nativeElement.querySelector('#loggin_button').click();    
    expect(component.loginFormulario.invalid).toBeFalse();
  });

  it('should detect form is invalid', async () => {
    //AL INGRSAR UN CORREO INVALIDO SE ESPERA VERDADERO SU INVALIDEZ     
    component.loginFormulario=_builder.group({
      password:['react',[Validators.required]],
      email:['challengeXalkemy.org',[Validators.required,Validators.email]]
    });
    expect(component.loginFormulario.invalid).toBeTruthy();
  });



});
