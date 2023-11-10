export class View {
  constructor(select) {
    const element = document.querySelector(select);
    if (element) {
      this.element = element;
    } else {
      throw new Error(
        `Element not found, verify ${select} element exist of DOM`
      );
    }
  }
  updated(model) {
    const template = this.template(model);
    this.element.innerHTML = template;
  }
}
