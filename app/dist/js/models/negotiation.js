export class Negotiation {
  constructor(_data, quantity, value) {
    this._data = _data;
    this.quantity = quantity;
    this.value = value;
  }
  get volume() {
    return this.quantity * this.value;
  }
  get data() {
    const data = new Date(this._data.getTime());
    return data;
  }
  static created(dataString, qtyString, valueString) {
    const exp = /-/g;
    const date = new Date(dataString.replace(exp, ','));
    const quantity = parseInt(qtyString);
    const value = parseFloat(valueString);
    return new Negotiation(date, quantity, value);
  }
}
