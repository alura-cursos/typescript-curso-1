export class View {
    constructor(seletor, scapeBool) {
        this.scape = false;
        this.element = document.querySelector(seletor);
        if (scapeBool) {
            this.scape = scapeBool;
        }
    }
    update(model) {
        let template = this.template(model);
        if (this.scape) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, "");
        }
        this.element.innerHTML = template;
    }
}
