import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SuperHero } from 'src/app/core/interfaces/SuperHero';
import { SuperHeroStorageService } from 'src/app/home/services/super-hero-storage.service';
import { SuperHerosService } from 'src/app/home/services/super-heros.service';

@Component({
  selector: 'app-super-hero-detail',
  templateUrl: './super-hero-detail.component.html',
  styleUrls: ['./super-hero-detail.component.css']
})
export class SuperHeroDetailComponent implements OnInit {

  public superHero:SuperHero;
  constructor(private superHerosService:SuperHerosService,private route: ActivatedRoute,) { }
  async ngOnInit() {    
    const req=(await this.superHerosService.getSuperHero(this.route.snapshot.params['id'])); 
    this.superHero=req.data;    
  }

}
