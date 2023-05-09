import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent  {
  montoFactura!: number ;
  detallesFactura!: string;

  procesarFactura() {
    const doc = new jsPDF();
    doc.text(`Monto: $${this.montoFactura}`, 20, 20);
    doc.text(`Detalles: ${this.detallesFactura}`, 20, 30);
    doc.save('factura.pdf');
    this.montoFactura = 0; // Limpia el campo de entrada de monto
    this.detallesFactura = ''; // Limpia el campo de detalles
    alert('Factura procesada correctamente.');
  }
}
