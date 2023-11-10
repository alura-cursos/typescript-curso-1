export function loginTimeExecution(inSeconds = false) {
  return function (target, propertyKey, descriptor) {
    const methodOrigin = descriptor.value;
    descriptor.value = function (...args) {
      let division = 1;
      let units = 'milliseconds';
      if (inSeconds) {
        division = 1000;
        units = 'seconds';
      }
      const timeExecutionMethodInitial = performance.now();
      const returnMethod = methodOrigin.apply(this, args);
      const timeExecutionMethodFinal = performance.now();
      console.log(
        `${propertyKey}, tempo de execução: ${
          (timeExecutionMethodInitial - timeExecutionMethodFinal) / division
        } ${units}`
      );
      returnMethod;
    };
    return descriptor;
  };
}
