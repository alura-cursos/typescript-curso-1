var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { loginTimeExecution } from "../decorators/login-time-execution.js";
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
        let template = this.template(model);
        if (this.scape) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.element.innerHTML = template;
    }
}
__decorate([
    loginTimeExecution(true)
], View.prototype, "updated", null);
