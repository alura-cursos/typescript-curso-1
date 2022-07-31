export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    static createdEscope(dateStr, quantStr, valueStr) {
        const exp = /-/g;
        const date = new Date(dateStr.replace(exp, ","));
        const quantidade = parseInt(quantStr);
        const valor = parseFloat(valueStr);
        return new Negociacao(date, quantidade, valor);
    }
}
