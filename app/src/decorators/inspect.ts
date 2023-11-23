export function inspect() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const methodOrigin = descriptor.value;
    descriptor.value = function (...args: any[]) {
      const methodReturn = methodOrigin.apply(this, args);

      return methodReturn;
    };

    return descriptor;
  };
}
