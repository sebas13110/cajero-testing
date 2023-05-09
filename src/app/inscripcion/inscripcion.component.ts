import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.css']
})
export class InscripcionComponent  {
  nombreEstudiante!: string;
  apellidoEstudiante!: string;
  fechaNacimientoEstudiante!: Date;
  montoInscripcion!: number;

  procesarInscripcion() {
    // Lógica para guardar la inscripción en el sistema
    // ...
    alert('Inscripción procesada correctamente.');
    this.limpiarFormularioInscripcion();
  }

  limpiarFormularioInscripcion() {
    this.nombreEstudiante = '';
    this.apellidoEstudiante = '';
    this.fechaNacimientoEstudiante = new Date();
    this.montoInscripcion = 2500;
  }
  

}
