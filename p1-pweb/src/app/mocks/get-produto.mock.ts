import { Produto } from '../interfaces';

export const GetProduto = {
  id: 'sap-01',
  imagem: {
    url: './assets/imagens/bota_anarchista.jpg',
    descricao:
      'Bota de couro preta em fundo laranja, tipo ankle boot, com salto médio',
  },
  nome: 'Bota Anarquista',
  subtitulo: 'Couro estruturado / Salto reto',
  preco: 299.0,
  frase: 'Firmeza que ocupa.',
  descricao:
    'A Bota Anarquista é mais que um sapato — é ferramenta de autonomia sáfica na cidade. Pensada pra flâneuse que faz do asfalto um espaço de presença radical.',
  numeracao: [
    { tamanho: 36, disponivel: true },
    { tamanho: 37, disponivel: false },
    { tamanho: 38, disponivel: true },
    { tamanho: 39, disponivel: true },
    { tamanho: 40, disponivel: true },
    { tamanho: 41, disponivel: true },
  ],
};

export const Produtos: Array<Produto> = [
  {
    id: 'sap-01',
    imagem: {
      url: './assets/imagens/bota_anarchista.jpg',
      descricao:
        'Bota de couro preta em fundo laranja, tipo ankle boot, com salto médio',
    },
    nome: 'Bota Anarquista',
    subtitulo: 'Couro estruturado / Salto reto',
    preco: 299.0,
    frase: 'Firmeza que ocupa.',
    descricao:
      'A Bota Anarquista é mais que um sapato — é ferramenta de autonomia sáfica na cidade. Pensada pra flâneuse que faz do asfalto um espaço de presença radical.',
    numeracao: [
      { tamanho: 36, disponivel: true },
      { tamanho: 37, disponivel: false },
      { tamanho: 38, disponivel: true },
      { tamanho: 39, disponivel: true },
      { tamanho: 40, disponivel: true },
      { tamanho: 41, disponivel: true },
    ],
  },
  {
    id: 'sap-02',
    imagem: {
      url: './assets/imagens/loafer_academico.jpg',
      descricao:
        'Sapato de couro vinho em fundo cinza, tipo loafer, com solado tratorado preto.',
    },
    nome: 'Loafer Acadêmico',
    subtitulo: 'Couro vegetal / Sola tratorada',
    preco: 249.9,
    frase: 'Rigor e pensamento.',
    descricao:
      'O Loafer Acadêmico nasce da tensão entre tradição e ruptura.Pra quem ocupa espaços de saber com o próprio corpo.Clássico, mas nunca passivo.',
    numeracao: [
      { tamanho: 36, disponivel: true },
      { tamanho: 37, disponivel: true },
      { tamanho: 38, disponivel: true },
      { tamanho: 39, disponivel: false },
      { tamanho: 40, disponivel: true },
      { tamanho: 41, disponivel: true },
    ],
  },
  {
    id: 'sap-03',
    imagem: {
      url: './assets/imagens/oxford_oradora.jpg',
      descricao:
        'Sapato de couro marrom em fundo preto, tipo oxford, com cadarço marrom.',
    },
    nome: 'Oxford Oradora',
    subtitulo: 'Couro legítimo / Amarração assimétrica',
    preco: 399.9,
    frase: 'Precisão e presença.',
    descricao:
      'O Oxford Oradora é pra quem fala sem abrir a boca.Uma releitura da forma clássica, pensada pra quem anda por si.Entre o rígido e o fluido, ele encontra equilíbrio.',
    numeracao: [
      { tamanho: 36, disponivel: true },
      { tamanho: 37, disponivel: true },
      { tamanho: 38, disponivel: false },
      { tamanho: 39, disponivel: true },
      { tamanho: 40, disponivel: true },
      { tamanho: 41, disponivel: true },
    ],
  },
];
