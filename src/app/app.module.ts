import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//componentes creados
import { RutinasComponent } from './components/rutinas/rutinas.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EjerciciosComponent } from './components/ejercicios/ejercicios.component';
import { BlogComponent } from './components/blog/blog.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { HomeComponent } from './components/home/home.component';


import { RouterModule } from '@angular/router';
import { CrearRutinaComponent } from './components/crear-rutina/crear-rutina.component';
import { VerRutinasComponent } from './components/ver-rutinas/ver-rutinas.component';

@NgModule({
  declarations: [
    AppComponent,
    RutinasComponent,
    NavbarComponent,
    EjerciciosComponent,
    BlogComponent,
    IniciarSesionComponent,
    HomeComponent,
    CrearRutinaComponent,
    VerRutinasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'', component:HomeComponent},
      { path: 'rutinas', component: RutinasComponent },
      { path: 'ejercicios', component: EjerciciosComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'inicio-sesion', component: IniciarSesionComponent },
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
