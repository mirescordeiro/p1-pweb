import { Numeracao } from './numeracao.interface';

export interface Produto {
  id: string;
  imagem: {
    url: string;
    descricao: string;
  };
  nome: string;
  subtitulo: string;
  preco: number;
  frase: string;
  descricao: string;
  numeracao?: Numeracao[];
}

