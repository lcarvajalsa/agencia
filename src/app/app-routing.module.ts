import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PublicaComponent } from './publica/publica.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { TicketComponent } from './ticket/ticket.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'publica', component: PublicaComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: 'ticket', component: TicketComponent },

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '', redirectTo: '/publica', pathMatch: 'full' },
  { path: '', redirectTo: '/registrar', pathMatch: 'full' },
  { path: '', redirectTo: '/ticket', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
