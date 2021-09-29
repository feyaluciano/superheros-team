import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoggedinGuardService } from '../core/services/user-loggedin-guard.service';
import { SearchSuperheroComponent } from './components/search-superhero/search-superhero.component';

const routes:Routes=[      
  {path : '' , redirectTo : '/search/superhero' , pathMatch : 'full'},
  {
    path:'',
    children: [      
      { path: 'superhero', component: SearchSuperheroComponent,  canActivate: [UserLoggedinGuardService]  }           
    ]   
  }  
  ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchSuperheroRoutingModule { }
