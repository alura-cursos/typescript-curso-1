import { View } from "./view.js";

export class AlertView extends View {
  template(model: string): string {
    return `
      <p class='alert alert-info'>${model}</p>
    `;
  }
  update(model: string): void {
    const template = this.template(model);
    this.element.innerHTML = template;
  }
}
