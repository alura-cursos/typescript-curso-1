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
// <td>${item.data.getDate()}/${item.data.getMonth() + 1}/${item.data.getFullYear()}</td>
