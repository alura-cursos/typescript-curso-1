export abstract class View<T> {
  protected element: HTMLElement;
  private scape = false;

  constructor(select: string, scape?: boolean) {
    this.element = document.querySelector(select);

    if (scape) {
      this.scape = scape;
    }
  }

  protected abstract template(model: T): string;

  public updated(model: T): void {
    let template = this.template(model);

    if (this.scape) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, '');
    }

    this.element.innerHTML = template;
  }
}
