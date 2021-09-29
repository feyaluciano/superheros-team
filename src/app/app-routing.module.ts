import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoggedinGuardService } from './core/services/user-loggedin-guard.service';

const rutas:Routes=[    
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(
      m => m.AuthModule
      ),   
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(
      m => m.HomeModule
      ),
      canActivate: [UserLoggedinGuardService]   
  },
  {
    path: 'detail',
    loadChildren: () => import('./super-hero-detail/super-hero-detail.module').then(      
      m =>  m.SuperHeroDetailModule
      ),
      canActivate: [UserLoggedinGuardService]    
  },
  {
    path: 'search',
    loadChildren: () => import('./search-superhero/search-superhero.module').then(      
      m =>  m.SearchSuperheroModule
      ), 
      canActivate: [UserLoggedinGuardService]    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }