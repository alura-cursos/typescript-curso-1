export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // ReadonlyArray<Negociacao> é o mesmo que:
    lista() {
        return this.negociacoes;
    }
}
const negociacoes = new Negociacoes();
