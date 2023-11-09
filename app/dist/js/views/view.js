export class View {
    constructor(select, scape) {
        this.scape = false;
        const element = document.querySelector(select);
        if (element) {
            this.element = element;
        }
        else {
            throw new Error(`Element not found, verify ${select} element exist of DOM`);
        }
        if (scape) {
            this.scape = scape;
        }
    }
    updated(model) {
        const timeOne = performance.now();
        let template = this.template(model);
        if (this.scape) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.element.innerHTML = template;
        const timeTwo = performance.now();
        console.log(`tempo que o método update ${(timeOne - timeTwo) / 1000} segundos`);
    }
}
