var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { scape } from '../decorators/scape.js';
import { View } from './view.js';
export class NegotiationView extends View {
    template(model) {
        return `
      <table class="table table-striped table-hover shadow-sm">
        <thead class="thead-dark">
          <tr class="text-uppercase">
            <th class="text-info">Data</th>
            <th class="text-info">Quantidade</th>
            <th class="text-info">Valor</th>
          </tr>
        </thead>

        <tbody>
          ${model
            .list()
            .map(item => {
            return `
                <tr class="font-weight-bold text-light">
                  <td>${this.formatDate(item.data)}</td>
                  <td>${item.quantity}</td>
                  <td>${item.value}</td>
                </tr>
              `;
        })
            .join('')}
        </tbody>
      </table>
    `;
    }
    formatDate(data) {
        return new Intl.DateTimeFormat().format(data);
    }
}
__decorate([
    scape
], NegotiationView.prototype, "template", null);
