var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Negotiation } from '../models/negotiation.js';
import { Negotiations } from '../models/negotiations.js';
import { MessageView } from './../views/message-view.js';
import { NegotiationView } from '../views/negotiation-view.js';
import { DaysOfWeek } from '../enums/daysOfWeek.js';
import { loginTimeExecution } from '../decorators/login-time-execution.js';
import { inspect } from '../decorators/inspect.js';
import { domInjector } from '../decorators/dom-injector.js';
import { NegotiationsService } from '../services/negotiations-services.js';
import { printOut } from '../utils/print-out.js';
export class NegotiationController {
    constructor() {
        this.negotiations = new Negotiations();
        this.messageView = new MessageView('#messageView');
        this.negotiationsView = new NegotiationView('#negotiationView');
        this.negotiationsService = new NegotiationsService();
        this.negotiationsView.updated(this.negotiations);
    }
    add() {
        const negotiation = Negotiation.created(this.inputData.value, this.inputQuantity.value, this.inputValue.value);
        if (!this.isDayUtil(negotiation.data)) {
            this.messageView.updated('Negociação feitas apenas em dias uteis!');
            return;
        }
        this.negotiations.add(negotiation);
        printOut(negotiation, this.negotiations);
        this.clearForm();
        this.updatedView();
    }
    importData() {
        this.negotiationsService.getNegotiationsToday()
            .then(negotiationToday => {
            return negotiationToday.filter(item => {
                return !this.negotiations
                    .list()
                    .some(negotiation => negotiation.isEqual(item));
            });
        })
            .then(negotiationToday => {
            for (let negotiation of negotiationToday) {
                this.negotiations.add(negotiation);
            }
            this.negotiationsView.updated(this.negotiations);
        });
    }
    isDayUtil(data) {
        return (data.getDay() > DaysOfWeek.SUNDAY && data.getDay() < DaysOfWeek.SATURDAY);
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
__decorate([
    domInjector('#data')
], NegotiationController.prototype, "inputData", void 0);
__decorate([
    domInjector('#quantidade')
], NegotiationController.prototype, "inputQuantity", void 0);
__decorate([
    domInjector('#valor')
], NegotiationController.prototype, "inputValue", void 0);
__decorate([
    inspect(),
    loginTimeExecution()
], NegotiationController.prototype, "add", null);
//# sourceMappingURL=negotiation_controller.js.map