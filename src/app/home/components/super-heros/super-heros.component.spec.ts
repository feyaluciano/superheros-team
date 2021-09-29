/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SuperHerosComponent } from './super-heros.component';

describe('SuperHerosComponent', () => {
  let component: SuperHerosComponent;
  let fixture: ComponentFixture<SuperHerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperHerosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperHerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
