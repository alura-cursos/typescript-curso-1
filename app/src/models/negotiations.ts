import { type IPrintable } from '../interfaces/IPrintable.js';
import { type Negotiation } from './negotiation.js';

export class Negotiations implements IPrintable {
  private negotiations: Array<Negotiation> = [];

  public add(negotiation: Negotiation) {
    this.negotiations.push(negotiation);
  }

  public list(): ReadonlyArray<Negotiation> {
    return this.negotiations;
  }

  public convertForText(): string {
    return JSON.stringify(this.negotiations, null, 2)
  }
}
