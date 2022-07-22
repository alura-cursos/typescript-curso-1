import { View } from "./view.js";
export class NegociacoesView extends View {
    template(model) {
        return `
    <table class='table table-hover table-bordered'>
      <thead>
        <tr>
          <th>DATA</th>
          <th>QUANTIDADE</th>
          <th>VALOR</th>
        </tr>
      </thead>
      <tbody>
        ${model
            .lista()
            .map((negociacao) => {
            return `
            <tr> 
              <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
              <td>${negociacao.quantidade}</td>
              <td>${negociacao.valor}</td>
            </tr>
            `;
        })
            .join("")}
      </tbody>
    </table>
    `;
    }
    update(model) {
        const template = this.template(model);
        this.element.innerHTML = template;
    }
}
