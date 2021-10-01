import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';


//cambiar idioma
import localeEsCl from '@angular/common/locales/es-CL';
import localeFr from '@angular/common/locales/fr';
import {registerLocaleData} from '@angular/common';


registerLocaleData(localeEsCl);
registerLocaleData(localeFr);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRouterModule,
    VentasModule
    
    
  ],
  providers: [
    {provide: LOCALE_ID,useValue: 'es-CL'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
