export class Negociacao {
  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {}

  get data(): Date {
    const data = new Date(this._data.getTime());
    return data;
  }

  get volume(): number {
    return this.quantidade * this.valor;
  }
  public static createdEscope(
    dateStr: string,
    quantStr: string,
    valueStr: string
  ): Negociacao {
    const exp = /-/g;
    const date = new Date(dateStr.replace(exp, ","));
    const quantidade = parseInt(quantStr);
    const valor = parseFloat(valueStr);
    return new Negociacao(date, quantidade, valor);
  }
}
