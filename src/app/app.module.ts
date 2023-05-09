import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AbonoComponent } from './abono/abono.component';
import { PagoComponent } from './pago/pago.component';
import { InscripcionComponent } from './inscripcion/inscripcion.component';
import { FacturaComponent } from './factura/factura.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AbonoComponent,
    PagoComponent,
    InscripcionComponent,
    FacturaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
