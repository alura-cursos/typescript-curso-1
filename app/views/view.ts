export class View {
  protected element: HTMLElement;
  constructor(seletor: string) {
    this.element = document.querySelector(seletor);
  }
}
