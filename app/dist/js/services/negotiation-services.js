import { Negotiation } from '../models/negotiation';
export class NegotiationsService {
    getNegotiationsToday() {
        return fetch('http://localhost:8080/dados')
            .then(response => response.json())
            .then((data) => {
            return data.map(dataDay => {
                return new Negotiation(new Date(), dataDay.vezes, dataDay.montante);
            });
        });
    }
}
