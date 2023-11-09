import { Negotiation } from '../models/negotiation.js';
import { Negotiations } from '../models/negotiations.js';
import { MessageView } from './../views/message-view.js';
import { NegotiationView } from '../views/negotiation-view.js';
import { DaysOfWeek } from '../enums/daysOfWeek.js';
export class NegotiationController {
  constructor() {
    this.negotiations = new Negotiations();
    this.messageView = new MessageView('#messageView');
    this.negotiationsView = new NegotiationView('#negotiationView');
    this.inputData = document.querySelector('#data');
    this.inputQuantity = document.querySelector('#quantidade');
    this.inputValue = document.querySelector('#valor');
    this.negotiationsView.updated(this.negotiations);
  }
  add() {
    const negotiation = this.createNegotiation();
    if (!this.isDayUtil(negotiation.data)) {
      this.messageView.updated('Negociação feitas apenas em dias uteis!');
      return;
    }
    this.negotiations.add(negotiation);
    this.clearForm();
    this.updatedView();
  }
  isDayUtil(data) {
    return (
      data.getDay() > DaysOfWeek.SUNDAY && data.getDay() < DaysOfWeek.SATURDAY
    );
  }
  createNegotiation() {
    const exp = /-/g;
    const date = new Date(this.inputData.value.replace(exp, ','));
    const quantity = parseInt(this.inputQuantity.value);
    const value = parseFloat(this.inputValue.value);
    return new Negotiation(date, quantity, value);
  }
  clearForm() {
    this.inputData.value = '';
    this.inputQuantity.value = '';
    this.inputValue.value = '';
    this.inputData.focus();
  }
  updatedView() {
    this.negotiationsView.updated(this.negotiations);
    this.messageView.updated('Negociação adicionada na tabela com sucesso');
  }
}
