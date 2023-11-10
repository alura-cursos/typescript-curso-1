export abstract class View<T> {
  protected element: HTMLElement;

  constructor (select: string) {
    const element = document.querySelector(select);

    if (element) {
      this.element = element as HTMLElement;
    } else {
      throw new Error(
        `Element not found, verify ${select} element exist of DOM`
      );
    }
  }

  protected abstract template (model: T): string;

  public updated (model: T): void {
    const template = this.template(model);

    this.element.innerHTML = template;
  }
}
