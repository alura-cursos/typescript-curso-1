import { Negotiation } from './negotiation.js'

export class Negotiations {
  private negotiations: Negotiation[] = []

  add(negotiation: Negotiation) {
    this.negotiations.push(negotiation)
  }

  list(): readonly Negotiation[] {
    return this.negotiations
  }
}
