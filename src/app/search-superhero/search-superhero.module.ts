import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchSuperheroRoutingModule } from './search-superhero-routing.module';
import { SharedModule } from '../shared/shared.module';

import { HomeModule } from '../home/home.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchSuperheroComponent } from './components/search-superhero/search-superhero.component';



@NgModule({
  declarations: [SearchSuperheroComponent],
  imports: [
    CommonModule,
    HomeModule,
    SharedModule,    
    SearchSuperheroRoutingModule,
    FormsModule,
    ReactiveFormsModule,            
  ]
})
export class SearchSuperheroModule { }
