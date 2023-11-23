/**
 * @function domInjector, que é um decorator de propriedade,
 * que recebe como parâmetro o ID do elemento do DOM, que eu quero que ele
 * busque e atribua a * propriedade inputData, inputQuantidade, inputValor.
 */

export function domInjector(selector: string) {
  return function (target: any, propertyKey: string) {
    console.log(
      `Modifying prototype ${target.constructor.name} and adding getter for property ${propertyKey}`
    );

    // FEAT: Fazendo um cache na DOM para não fica executando o decorators @domInjector
    let element: HTMLElement;

    /**
     * @function
     * função que seleciona um elemento especifico na arvore DOM
     */
    const getter = function () {
      if (!element) {
        element = document.querySelector(selector) as HTMLElement;

        console.log(
          `Search element of DOM with selector ${selector} for inject in ${propertyKey} `
        );
      }

      return element;
    };

    /**
     * @Object Definindo um novo getter
     */
    Object.defineProperty(target, propertyKey, { get: getter });
  };
}
