export class View {
  constructor(select, scape) {
    this.scape = false;
    const element = document.querySelector(select);
    if (element) {
      this.element = element;
    } else {
      throw new Error(
        `Element not found, verify ${select} element exist of DOM`
      );
    }
    if (scape) {
      this.scape = scape;
    }
  }
  updated(model) {
    let template = this.template(model);
    if (this.scape) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, '');
    }
    this.element.innerHTML = template;
  }
}
