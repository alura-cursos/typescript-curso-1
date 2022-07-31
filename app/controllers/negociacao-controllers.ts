import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { AlertView } from "../views/alert-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes();
  private negociaçõesView = new NegociacoesView("#negociacoesView", true);
  private alertView = new AlertView("#alertView");

  constructor() {
    this.inputData = document.querySelector("#data");
    this.inputQuantidade = document.querySelector("#quantidade");
    this.inputValor = document.querySelector("#valor");
    this.negociaçõesView.update(this.negociacoes);
  }

  adiciona(): void {
    const negociacao = Negociacao.createdEscope(
      this.inputData.value,
      this.inputQuantidade.value,
      this.inputValor.value
    );
    if (!this.isDateUtil(negociacao.data)) {
      this.alertView.update("Apenas negociações de em dias uteis são aceitas");
      return;
    }
    this.negociacoes.adiciona(negociacao);
    this.limparFormulario();
    this.updatedView();
  }

  private isDateUtil(date: Date) {
    return (
      date.getDay() > DiasDaSemana.DOMINGO &&
      date.getDay() < DiasDaSemana.SABADO
    );
  }

  private limparFormulario(): void {
    this.inputData.value = "";
    this.inputQuantidade.value = "";
    this.inputValor.value = "";
    this.inputData.focus();
  }

  private updatedView(): void {
    this.negociaçõesView.update(this.negociacoes);
    this.alertView.update("Negociação adiconada com sucesso!");
  }
}
