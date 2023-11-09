export class View {
  constructor(select, scape) {
    this.scape = false;
    this.element = document.querySelector(select);
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
