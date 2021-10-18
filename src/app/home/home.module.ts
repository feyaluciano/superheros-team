import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SuperHeroHomeComponent } from './components/super-hero-home/super-hero-home.component';
import { SuperHerosComponent } from './components/super-heros/super-heros.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [SuperHeroHomeComponent,SuperHerosComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
  ],
  exports:[SuperHeroHomeComponent,SuperHerosComponent]
})
export class HomeModule { }


