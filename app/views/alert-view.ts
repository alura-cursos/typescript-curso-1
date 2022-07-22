export class AlertView {
  private element: HTMLElement;
  constructor(seletor: string) {
    this.element = document.querySelector(seletor);
  }

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
