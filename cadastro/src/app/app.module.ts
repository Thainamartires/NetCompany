import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { HeaderComponent } from './share/component/header/header.component';
import { AppRoutingModule } from '../app/shared/components/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    FuncionarioComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
