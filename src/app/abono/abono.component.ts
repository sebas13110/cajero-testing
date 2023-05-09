import { Component } from '@angular/core';


@Component({
  selector: 'app-abono',
  templateUrl: './abono.component.html',
  styleUrls: ['./abono.component.css']
})
export class AbonoComponent {
  montoAbonar: number = 1;
  totalDeuda: number = 1000;

  procesarAbono() {
    if (this.montoAbonar && this.montoAbonar > 0 && this.montoAbonar <= this.totalDeuda) {
      this.totalDeuda -= this.montoAbonar;
      // Lógica para guardar el abono en el sistema
      this.montoAbonar = 0; // Limpia el campo de entrada
      alert('Abono procesado correctamente.');
    } else {
      alert('El monto del abono supera la deuda solo se puede abonar el monto total de la deuda o menos.');
    }
  }
}