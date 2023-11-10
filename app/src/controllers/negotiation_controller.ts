import { Negotiation } from '../models/negotiation.js';
import { Negotiations } from '../models/negotiations.js';
import { MessageView } from './../views/message-view.js';
import { NegotiationView } from '../views/negotiation-view.js';
import { DaysOfWeek } from '../enums/daysOfWeek.js';
import { loginTimeExecution } from '../decorators/login-time-execution.js';
import { inspect } from '../decorators/inspect.js';
import { domInjector } from '../decorators/dom-injector.js';

export class NegotiationController {
  @domInjector('#data')
  private inputData: HTMLInputElement;

  @domInjector('#quantidade')
  private inputQuantity: HTMLInputElement;

  @domInjector('#valor')
  private inputValue: HTMLInputElement;

  private negotiations = new Negotiations();
  private messageView = new MessageView('#messageView');
  private negotiationsView = new NegotiationView('#negotiationView');

  constructor() {
    this.negotiationsView.updated(this.negotiations);
  }

  @inspect()
  @loginTimeExecution()
  public add(): void {
    const negotiation = Negotiation.created(
      this.inputData.value,
      this.inputQuantity.value,
      this.inputValue.value
    );

    if (!this.isDayUtil(negotiation.data)) {
      this.messageView.updated('Negociação feitas apenas em dias uteis!');
      return;
    }

    this.negotiations.add(negotiation);
    this.clearForm();
    this.updatedView();
  }

  private isDayUtil(data: Date) {
    return (
      data.getDay() > DaysOfWeek.SUNDAY && data.getDay() < DaysOfWeek.SATURDAY
    );
  }

  private clearForm(): void {
    this.inputData.value = '';
    this.inputQuantity.value = '';
    this.inputValue.value = '';
    this.inputData.focus();
  }

  private updatedView(): void {
    this.negotiationsView.updated(this.negotiations);
    this.messageView.updated('Negociação adicionada na tabela com sucesso');
  }
}
