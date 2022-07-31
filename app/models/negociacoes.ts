import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  private negociacoes: Negociacao[] = [];

  adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }
  // ReadonlyArray<Negociacao> é o mesmo que:
  lista(): readonly Negociacao[] {
    return this.negociacoes;
  }
}

const negociacoes = new Negociacoes();
