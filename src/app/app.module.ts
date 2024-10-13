import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireAuthModule } from "@angular/fire/compat/auth"; // esto lo instale
import { AngularFireModule } from "@angular/fire/compat"; // esto lo instale
import { environment } from "src/environments/environment";

import { HttpClientModule, provideHttpClient } from '@angular/common/http';// esto despues lo pruebo , Angular V18

import { LoginService } from "src/app/services/login.service"


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    // HttpClientModule // creo que esto no va porque esta obsleto , ahora se utiliza provideHttpClient()
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideHttpClient(), // importo Proveedor1Service en el array "providers", esta es la version nueva angular 18
    LoginService
  ],
  bootstrap: [AppComponent],
})

export class AppModule { }
