import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent {


  montoAbonar: number = 5000;
  totalDeuda: number = 5000;

  procesarAbono() {
    if (this.montoAbonar && this.montoAbonar > 0 && this.montoAbonar <= this.totalDeuda) {
      this.totalDeuda -= this.montoAbonar;
      // Lógica para guardar el abono en el sistema
      this.montoAbonar = 0; // Limpia el campo de entrada
      alert('Pago procesado correctamente.');
    } else {
      alert('Ya no hay deuda que pagar. Estas al corriente');
    }
  }
}



