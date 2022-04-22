// export class Negociacao {
//     constructor(_data, quantidade, valor) {
//         this._data = _data;
//         this.quantidade = quantidade;
//         this.valor = valor;
//     }
//     get volume() {
//         return this.quantidade * this.valor;
//     }
//     get data() {
//         const data = new Date(this._data.getTime());
//         return data;
//     }
// }

export class Negociacao {
    #data;
    #quantidade;
    #valor;

    constructor(data, quantidade, valor) {
        this.#data = data;
        this.#quantidade = quantidade;
        this.#valor = valor
    }

    get data() {
        return this.#data
    }

    get quantidade() {
        return this.#quantidade
    }

    get valor() {
        return this.#valor
    }

    get volume() {
        return this.#quantidade * this.#valor
    }
}
