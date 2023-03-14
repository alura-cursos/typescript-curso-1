import { Negociacao } from './models/negociacao.ts';

const negociacao = new Negociacao(new Date());
negociacao.quantidade = 309;

console.log(negociacao.volume)
