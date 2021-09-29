import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { SharedRoutingModule } from './shared-routing.module';
import { LateralMenuComponent } from './components/lateral-menu/lateral-menu.component';
import { ModalAlertComponent } from './components/modal-alert/modal-alert.component';


@NgModule({
  declarations: [LateralMenuComponent,ModalAlertComponent],
  imports: [
    CommonModule,    
  ],
  exports:[LateralMenuComponent]
})
export class SharedModule { }
