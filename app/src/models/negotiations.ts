import { type IModel } from '../interfaces/IModel.js';
import { type Negotiation } from './negotiation.js';

export class Negotiations implements IModel<Negotiations> {
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

  public isEqual(negotiations: Negotiations): boolean {
    return JSON.stringify(this.negotiations) ===
      JSON.stringify(negotiations.list());
  }
}
