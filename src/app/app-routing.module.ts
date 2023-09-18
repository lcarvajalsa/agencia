import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PublicaComponent } from './publica/publica.component';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { TicketComponent } from './ticket/ticket.component';
import { ReservaComponent } from './reserva/reserva.component';

const routes: Routes = [

  { path: 'publica', component: PublicaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: 'ticket', component: TicketComponent },
  { path: 'reserva', component: ReservaComponent },


  { path: '', redirectTo: '/publica', pathMatch: 'full' },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '', redirectTo: '/registrar', pathMatch: 'full' },
  { path: '', redirectTo: '/ticket', pathMatch: 'full' },
  { path: '', redirectTo: '/reserva', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
