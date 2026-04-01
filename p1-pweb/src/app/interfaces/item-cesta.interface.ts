export interface ItemCesta {
  id: string;
  imagem: {
    url: string;
    descricao: string;
  };
  nome: string;
  preco: number;
  tamanho: number;
  quantidade: number;
}
