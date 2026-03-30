import { Produto } from './produto.model';

export class Colecao {
  constructor(
    public colecao: string,
    public produtos: Produto[]
  ) { }
}