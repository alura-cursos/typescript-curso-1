export class Negotiation {
    constructor(_data, quantity, value) {
        this._data = _data;
        this.quantity = quantity;
        this.value = value;
    }
    static created(dataString, qtyString, valueString) {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantity = parseInt(qtyString);
        const value = parseFloat(valueString);
        return new Negotiation(date, quantity, value);
    }
    get volume() {
        return this.quantity * this.value;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    convertForText() {
        return `
      Data: ${this.data},
      Quantidade: ${this.quantity},
      Value: ${this.value}
    `;
    }
    isEqual(negotiation) {
        return this.data.getDate() === negotiation.data.getDate() &&
            this.data.getMonth() === negotiation.data.getMonth() &&
            this.data.getFullYear() === negotiation.data.getFullYear();
    }
}
//# sourceMappingURL=negotiation.js.map