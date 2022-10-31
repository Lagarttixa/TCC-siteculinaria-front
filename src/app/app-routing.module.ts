import { PaginaHomeComponent } from './pagina-home/pagina-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarReceComponent } from './adicionar-rece/adicionar-rece.component';

const routes: Routes = [

{
  path: 'login',
  loadChildren: () => import('./login/route/login.module').then((m) => m.LoginModule)
},

{
  path: '',
  component: PaginaHomeComponent,
},

{
  path: 'adiciona',
  component: AdicionarReceComponent,
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

