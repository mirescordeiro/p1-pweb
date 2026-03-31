import { Produto } from './produto.interface';

export interface ColecaoDetalhe {
  id: string;
  nome: string;
  produtos: Array<Produto>
}