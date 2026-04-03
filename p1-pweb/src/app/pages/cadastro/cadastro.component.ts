import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CadastroService } from '../../services/cadastro.service';
import { CadastroRequest } from '../../interfaces';

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
  private cadastroService = inject(CadastroService);
  private router = inject(Router);

  form = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required, Validators.minLength(6)]],
  });

  fazerCadastro() {
    if (this.form.valid) {
      this.cadastroService
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
