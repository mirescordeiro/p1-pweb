import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ContaService } from '../../services';

@Component({
  selector: 'app-recuperar-senha',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './recuperar-senha.component.html',
  styleUrl: './recuperar-senha.component.scss',
})
export class RecuperarSenhaComponent {
  public mensagem: string | null = null;
  public erroRecuperar: string | null = null;

  private fb = inject(FormBuilder);
  private contaService = inject(ContaService);

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  public recuperarConta(): void {
    if (this.form.valid) {
      const email = this.form.value.email?.trim().toLowerCase();

      this.contaService.redefinirSenha(email!).subscribe({
        next: () => {
          this.mensagem = 'Se o e-mail existir, enviaremos instruções.';
        },
        error: () => {
          this.erroRecuperar = 'Erro ao tentar recuperar senha';
        },
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
