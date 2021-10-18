/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ModalAlertComponent } from './modal-alert.component';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

describe('ModalAlertComponent', () => {
  let component: ModalAlertComponent;
  let fixture: ComponentFixture<ModalAlertComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports:[],
      declarations: [ ModalAlertComponent ],
      providers:[NgbActiveModal]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
