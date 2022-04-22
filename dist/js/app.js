// import { NegociacaoController } from './controllers/negociacao-controller.js';
// const controller = new NegociacaoController();
// const form = document.querySelector('.form');
// form.addEventListener('submit', event => {
//     event.preventDefault();
//     controller.adiciona();
// });

import { Negociacao } from "./models/negociacao.js";

const negociacao = new Negociacao(new Date(), 12, 500);
console.log('Maria', negociacao.volume);
