import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { LisUsuariosComponent } from './dashboard/lis-usuarios/lis-usuarios.component';
import { CardUsuarioComponent } from './dashboard/lis-usuarios/card-usuario/card-usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioComponent } from './dashboard/usuario/usuario.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LayoutComponent,
    NavbarComponent,
    FooterComponent,
    LisUsuariosComponent,
    CardUsuarioComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
