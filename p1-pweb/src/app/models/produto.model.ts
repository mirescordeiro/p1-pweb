import { Numeracao } from './numeracao.model';

export class Produto {
  constructor(
    public imagem: string,
    public nome: string,
    public preco: number,
    public frase: string,
    public descricao: string,
    public numeracao?: Numeracao[]
  ) { }
}

