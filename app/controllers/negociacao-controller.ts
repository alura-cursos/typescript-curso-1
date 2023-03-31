export class NegociacaoController {
  private inputData;
  private inputQuantidade;
  private inputValor

  constructor(){
    this.inputData = document.querySelector('#data');
    this.inputQuantidade = document.querySelector('#quantidade');
    this.inputValor = document.querySelector('#valor')
  }
  adiciona(){
    console.log( this.inputData, this.inputQuantidade, this.inputValor );
    
  }
}