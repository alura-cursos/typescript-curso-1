import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { AlertView } from "../views/alert-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociaçõesView = new NegociacoesView("#negociacoesView", true);
        this.alertView = new AlertView("#alertView");
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociaçõesView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = Negociacao.createdEscope(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.isDateUtil(negociacao.data)) {
            this.alertView.update("Apenas negociações de em dias uteis são aceitas");
            return;
        }
        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
        this.updatedView();
    }
    isDateUtil(date) {
        return (date.getDay() > DiasDaSemana.DOMINGO &&
            date.getDay() < DiasDaSemana.SABADO);
    }
    limparFormulario() {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }
    updatedView() {
        this.negociaçõesView.update(this.negociacoes);
        this.alertView.update("Negociação adiconada com sucesso!");
    }
}
