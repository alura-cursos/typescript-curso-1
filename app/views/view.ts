export abstract class View<T> {
  protected element: HTMLElement;
  private scape: boolean = false;
  constructor(seletor: string, scapeBool?: boolean) {
    this.element = document.querySelector(seletor);
    if (scapeBool) {
      this.scape = scapeBool;
    }
  }

  protected abstract template(model: T): string;

  update(model: T): void {
    let template = this.template(model);
    if (this.scape) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, "");
    }
    this.element.innerHTML = template;
  }
}
