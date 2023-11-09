export abstract class View<T> {
  protected element: HTMLElement

  constructor(select: string) {
    this.element = document.querySelector(select)
  }

  protected abstract template(model: T): string

  updated(model: T): void {
    const template = this.template(model)
    this.element.innerHTML = template
  }
}
