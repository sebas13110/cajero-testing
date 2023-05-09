import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbonoComponent } from './abono/abono.component';
import { PagoComponent } from './pago/pago.component';
import { InscripcionComponent } from './inscripcion/inscripcion.component';
import { FacturaComponent } from './factura/factura.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'abono', component: AbonoComponent },
  { path: 'pago', component: PagoComponent },
  { path: 'inscripcion', component: InscripcionComponent },
  { path: 'factura', component: FacturaComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
