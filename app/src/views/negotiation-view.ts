import { scape } from '../decorators/scape.js';
import { type Negotiations } from '../models/negotiations.js';
import { View } from './view.js';

export class NegotiationView extends View<Negotiations> {
  @scape
  protected template(model: Negotiations): string {
    return `
      <table class="table table-sm table-secondary table-striped table-hover shadow-sm">

        <thead>
          <tr class="text-uppercase">
            <th class="text-default">Data</th>
            <th class="text-default">Quantidade</th>
            <th class="text-default">Valor</th>
          </tr>
        </thead>

        <tbody>
          ${model
            .list()
            .map(item => {
              return `
                <tr class="fw-medium fs-5">
                  <td class="text-table-indigo">${this.formatDate(item.data)}</td>
                  <td class="text-table-indigo">${item.quantity}</td>
                  <td class="text-table-indigo">${item.value}</td>
                </tr>
              `;
            })
            .join('')}
        </tbody>
      </table>
    `;
  }

  private formatDate(data: Date): string {
    return new Intl.DateTimeFormat().format(data);
  }
}

// <td>${item.data.getDate()}/${item.data.getMonth() + 1}/${item.data.getFullYear()}</td>
