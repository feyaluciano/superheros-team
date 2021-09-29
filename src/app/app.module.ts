import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { UserLoggedinGuardService } from './core/services/user-loggedin-guard.service';
@NgModule({
  declarations: [	
    AppComponent,
     
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,   
    AuthModule,    
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy },UserLoggedinGuardService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
