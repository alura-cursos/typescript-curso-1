import { Negotiation } from './negotiation.js';

export class Negotiations {
  private negotiations: Array<Negotiation> = [];

  public add(negotiation: Negotiation) {
    this.negotiations.push(negotiation);
  }

  public list(): ReadonlyArray<Negotiation> {
    return this.negotiations;
  }
}
