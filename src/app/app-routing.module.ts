import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LisUsuariosComponent } from './dashboard/lis-usuarios/lis-usuarios.component';
import { UsuarioComponent } from './dashboard/usuario/usuario.component';

const routes: Routes = [
  {path:'',redirectTo:'layout',pathMatch:'full'},
  {path:'layout',component:LayoutComponent},
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'',component:LisUsuariosComponent},
    {path:'usuario/:id',component:UsuarioComponent}
  ]},
  {path:'**',redirectTo:'layout',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
