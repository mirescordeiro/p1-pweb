import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CadastroRequest } from '../../interfaces';
import { ContaService } from '../../services';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss',
})
export class CadastroComponent {
  erroCadastro: string | null = null;

  private fb = inject(FormBuilder);
  private contaService = inject(ContaService);
  private router = inject(Router);

  form = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required, Validators.minLength(6)]],
  });

  public fazerCadastro(): void {
    if (this.form.valid) {
      this.contaService
        .cadastrar(this.form.value as CadastroRequest)
        .subscribe({
          next: (response) => {
            if (response.token) {
              // TODO: salvar o token no localStorage
              this.router.navigate(['home']);
            } else {
              this.erroCadastro = 'Não foi possível cadastrar';
            }
          },
          error: () => {
            this.erroCadastro = 'Erro ao cadastrar. Tente novamente.';
          },
        });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
