import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { LateralComponent } from './lateral/lateral.component';
import { AltaUsuarioComponent } from './alta-usuario/alta-usuario.component';
import { ConsultaUsuarioComponent } from './consulta-usuario/consulta-usuario.component';
import { ModificaUsuarioComponent } from './modifica-usuario/modifica-usuario.component';
import { BajaUsuarioComponent } from './baja-usuario/baja-usuario.component';
import { InicioComponent } from './inicio/inicio.component';
import { Routes, RouterModule } from '@angular/router';
import { UtilidadesComponent } from './utilidades/utilidades.component';

const routes: Routes = [
  { path: '', component: InicioComponent, pathMatch: 'full'},
  { path: 'inicio', component: InicioComponent},
  { path: 'registrar', component: AltaUsuarioComponent},
  { path: 'modificar', component: ModificaUsuarioComponent},
  { path: 'consultar', component: ConsultaUsuarioComponent},
  { path: 'baja', component: BajaUsuarioComponent},
  { path: 'utilidades', component: UtilidadesComponent}

];

@NgModule({
  exports: [
    RouterModule
  ],
  declarations: [
    AppComponent,
    LateralComponent,
    AltaUsuarioComponent,
    ConsultaUsuarioComponent,
    ModificaUsuarioComponent,
    BajaUsuarioComponent,
    InicioComponent,
    UtilidadesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
