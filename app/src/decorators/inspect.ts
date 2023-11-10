export function inspect() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const methodOrigin = descriptor.value;
    descriptor.value = function (...args: Array<any>) {
      console.log(`--- Método ${propertyKey}`);
      console.log(`--- parâmetros: ${JSON.stringify(args)} ---`);

      const methodReturn = methodOrigin.apply(this, args);
      console.log(`--- Retorno: ${JSON.stringify(methodReturn)}`);

      return methodReturn;
    };

    return descriptor;
  };
}
