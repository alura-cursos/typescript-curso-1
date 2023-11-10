export class Negotiation {
  constructor(
    private _data: Date,
    public readonly quantity: number,
    public readonly value: number
  ) {}

  get volume(): number {
    return this.quantity * this.value;
  }

  get data(): Date {
    const data = new Date(this._data.getTime());
    return data;
  }

  public static created(
    dataString: string,
    qtyString: string,
    valueString: string
  ): Negotiation {
    const exp = /-/g;
    const date = new Date(dataString.replace(exp, ','));
    const quantity = parseInt(qtyString);
    const value = parseFloat(valueString);

    return new Negotiation(date, quantity, value);
  }
}
