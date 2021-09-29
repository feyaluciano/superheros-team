import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperHerosComponent } from './components/super-heros/super-heros.component';

const routes:Routes=[      
  {path : '' , redirectTo : '/home/superheros' , pathMatch : 'full'},
  {
    path:'',
    children: [      
      { path: 'superheros', component: SuperHerosComponent },           
    ]   
  }  
  ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
