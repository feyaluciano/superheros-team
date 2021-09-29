import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperHeroDetailRoutingModule } from './super-hero-detail-routing.module';
import { SuperHeroDetailComponent } from './components/super-hero-detail/super-hero-detail.component';
import { SharedModule } from '../shared/shared.module';
import { LateralMenuComponent } from '../shared/components/lateral-menu/lateral-menu.component';


@NgModule({
  declarations: [SuperHeroDetailComponent],
  imports: [
    CommonModule,
    SuperHeroDetailRoutingModule,
    SharedModule
  ],
  exports:[SuperHeroDetailComponent]
})
export class SuperHeroDetailModule { }
