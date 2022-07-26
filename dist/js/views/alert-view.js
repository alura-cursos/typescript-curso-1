import { View } from "./view.js";
export class AlertView extends View {
    template(model) {
        return `
      <p class='alert alert-info'>${model}</p>
    `;
    }
}
