import { Negotiation } from '../models/negotiation.js';
import { Negotiations } from '../models/negotiations.js';

export class NegotiationController {
    private inputData: HTMLInputElement;
    private inputQuantity: HTMLInputElement;
    private inputValue: HTMLInputElement;
    private negotiations = new Negotiations();

    constructor() {
      this.inputData = document.querySelector('#data');
      this.inputQuantity = document.querySelector('#quantidade');
      this.inputValue = document.querySelector('#valor');
    }

    add(): void {
      const negotiation = this.createNegotiation();
      negotiation.data.setDate(12);
      this.negotiations.add(negotiation);
      console.log(this.negotiations.list());
      this.clearForm();
    }

    createNegotiation(): Negotiation {
      const exp = /-/g;
      const date = new Date(this.inputData.value.replace(exp, ','));
      const quantity = parseInt(this.inputQuantity.value);
      const value = parseFloat(this.inputValue.value);
      return new Negotiation(date, quantity, value);
    }

    clearForm(): void {
      this.inputData.value = '';
      this.inputQuantity.value = '';
      this.inputValue.value = '';
      this.inputData.focus();
    }
}
