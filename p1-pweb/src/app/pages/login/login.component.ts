import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

import { ContaService } from '../../services';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  public erroLogin: string | null = null;

  private fb = inject(FormBuilder);
  private contaService = inject(ContaService);
  private router = inject(Router);

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required, Validators.minLength(6)]],
  });

  public fazerLogin() {
    if (this.form.valid) {
      const { email, senha } = this.form.value;

      this.contaService.autenticar(email!, senha!).subscribe({
        next: (response) => {
          if (response.token) {
            // TODO: salvar o token no localStorage
            this.router.navigate(['home']);
          } else {
            this.erroLogin = 'E-mail ou senha inválidos';
          }
        },
        error: () => {
          this.erroLogin = 'Erro ao tentar fazer login. Tente novamente.';
        },
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
