export abstract class View<T> {
  protected element: HTMLElement;
  private scape = false;

  constructor(select: string, scape?: boolean) {
    const element = document.querySelector(select);

    if (element) {
      this.element = element as HTMLElement;
    } else {
      throw new Error(
        `Element not found, verify ${select} element exist of DOM`
      );
    }

    if (scape) {
      this.scape = scape;
    }
  }

  protected abstract template(model: T): string;

  public updated(model: T): void {
    const timeOne = performance.now();
    let template = this.template(model);

    if (this.scape) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, '');
    }

    this.element.innerHTML = template;

    const timeTwo = performance.now();
    console.log(`tempo que o método update ${(timeOne - timeTwo)/1000} segundos`);
  }
}
