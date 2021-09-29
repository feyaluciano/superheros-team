import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SuperHero } from 'src/app/core/interfaces/SuperHero';
import { SuperHeroStorageService } from 'src/app/home/services/super-hero-storage.service';
import { SuperHerosService } from 'src/app/home/services/super-heros.service';
import { SearchSuperheroService } from '../../services/search-superhero.service';
import {debounceTime, distinctUntilChanged, filter, tap}  from 'rxjs/operators';
import {fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-search-superhero',
  templateUrl: './search-superhero.component.html',
  styleUrls: ['./search-superhero.component.css']
})
export class SearchSuperheroComponent  {
  public listSuperHeros:SuperHero[]=[];
  
  public sending:boolean=false;

  obs:Subscription;

  form: FormGroup;

  @ViewChild('input') input: ElementRef;
  
  constructor(private _builder: FormBuilder,private searchSuperheroService:SearchSuperheroService,private superHerosService:SuperHerosService, private superHeroStorageService:SuperHeroStorageService) {
    this.form = this._builder.group({      
      search_superhero: ['', [Validators.required]],            
    });

   }


   

   ngOnInit() {
     //Utilizo debunce time no cargar a la api 
    this.obs=this.form.valueChanges
    .pipe(debounceTime(1500))
    .subscribe(async data => {   
      //Como pre condición no permito buscar con menos de tres caracteres   
      if (data.search_superhero.length > 2) {
        this.sending=true;
        let req=await this.searchSuperheroService.getSuperHeros(data.search_superhero);
        this.sending=false;
        this.listSuperHeros=JSON.parse(JSON.stringify(req.data.results));      
      }
     
    }
    
    );           
  }

}
