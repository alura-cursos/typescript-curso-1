export function inspect() {
  return function (target, propertyKey, descriptor) {
    const methodOrigin = descriptor.value;
    descriptor.value = function (...args) {
      console.log(`--- Método ${propertyKey}`);
      console.log(`--- parâmetros: ${JSON.stringify(args)} ---`);
      const methodReturn = methodOrigin.apply(this, args);
      console.log(`--- Retorno: ${JSON.stringify(methodReturn)}`);
      return methodReturn;
    };
    return descriptor;
  };
}
