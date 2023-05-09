import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!: string;
  password!: string;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  onSubmit(): void {
    if (this.authService.login(this.username, this.password)) {
      // Si las credenciales son válidas, redirigir al usuario al menú
      this.errorMessage = '';
      // ...
    } else {
      // Si las credenciales no son válidas, mostrar un mensaje de error
      this.errorMessage = 'Credenciales incorrectas';
    }
  }
}