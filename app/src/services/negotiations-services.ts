import { Negotiation } from '../models/negotiation.js';
import { type INegotiationOfTheDay } from '../interfaces/INegotiationOfTheDay.js';

export class NegotiationsService {
  public getNegotiationsToday(): Promise<Negotiation[]> {
    return fetch('http://localhost:8080/dados')
      .then(response => response.json())
      .then((data: Array<INegotiationOfTheDay>) => {
        return data.map(dataDay => {
          return new Negotiation(new Date(), dataDay.vezes, dataDay.montante);
        });
      })
  }
}
