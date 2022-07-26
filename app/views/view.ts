export abstract class View<T> {
  protected element: HTMLElement;
  constructor(seletor: string) {
    this.element = document.querySelector(seletor);
  }

  abstract template(model: T): string;

  update(model: T): void {
    const template = this.template(model);
    this.element.innerHTML = template;
  }
}
