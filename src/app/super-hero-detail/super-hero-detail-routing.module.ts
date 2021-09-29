import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperHeroDetailComponent } from './components/super-hero-detail/super-hero-detail.component';

const routes:Routes=[      
   {path : '' , redirectTo : '/home/superheros' , pathMatch : 'full'},
  {
    path:'',
    children: [      
      { path: 'superhero/:id', component: SuperHeroDetailComponent },           
    ]   
  }  
  ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperHeroDetailRoutingModule { }

