import { Negociacao } from "./models/negociacao.js";

const negociacao = new Negociacao(new Date(), 10, 30);
console.log("Maria", negociacao.volume);
