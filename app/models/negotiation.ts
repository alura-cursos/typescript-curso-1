export class Negotiation {
  constructor(
    private _data: Date,
    public readonly quantity: number,
    public readonly value: number
  ) {}

  get volume(): number {
    return this.quantity * this.value
  }

  get data(): Date {
    const data = new Date(this._data.getTime())
    return data
  }
}
