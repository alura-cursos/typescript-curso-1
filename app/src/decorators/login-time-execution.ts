export function loginTimeExecution(inSeconds: boolean = false) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const methodOrigin = descriptor.value;
    descriptor.value = function (...args: Array<any>) {
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
