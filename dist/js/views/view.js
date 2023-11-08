export class View {
    constructor(select) {
        this.element = document.querySelector(select);
    }
    updated(model) {
        const template = this.template(model);
        this.element.innerHTML = template;
    }
}
