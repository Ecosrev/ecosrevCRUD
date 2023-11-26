import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  validateLoginForm(): boolean {
    // Verificando se os campos não estão vazios
    if (this.email.trim() === '' || this.password.trim() === '') {
      alert('Por favor, preencha todos os campos!');
      return false;
    }

    // Expressão regular para validar o email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Verifica se o email corresponde ao padrão de email válido
    if (!emailRegex.test(this.email)) {
      alert('Por favor, insira um e-mail válido.');
      return false;
    }

    // Verifica se a senha tem exatamente 6 caracteres
    if (this.password.length !== 6) {
      alert('A senha deve ter exatamente 6 caracteres.');
      return false;
    }

    return true; // Retorna true se a validação for bem-sucedida
  }

  onSubmit(): void {
    if (this.validateLoginForm()) {
      // Se a validação for bem-sucedida, redirecione para a página desejada 
      setTimeout(() => {
        this.router.navigate(['/central']); // Substitua '/central' pela rota desejada
      }, 200); // Tempo em milissegundos
    }
  }
}
