export function inspect() {
  return function (target, propertyKey, descriptor) {
    const methodOrigin = descriptor.value;
    descriptor.value = function (...args) {
      const methodReturn = methodOrigin.apply(this, args);
      return methodReturn;
    };
    return descriptor;
  };
}
