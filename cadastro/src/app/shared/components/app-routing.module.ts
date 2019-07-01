import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { InicioComponent } from 'src/app/inicio/inicio.component';
import { FuncionarioComponent } from 'src/app/funcionario/funcionario.component';

const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'inicio', component:InicioComponent},
    { path: 'funcionario', component:FuncionarioComponent },
    { path: 'funcionario/:id', component: FuncionarioComponent },
    { path: 'not-found', loadChildren: 'src/app/not-found/not-found.module' },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }