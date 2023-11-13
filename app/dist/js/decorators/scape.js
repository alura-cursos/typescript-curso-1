export function scape(target, propertyKey, descriptor) {
    const methodOrigin = descriptor.value;
    descriptor.value = function (...args) {
        let methodReturn = methodOrigin.apply(this, args);
        if (typeof methodReturn === 'string') {
            methodReturn = methodReturn.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        return methodReturn;
    };
    return descriptor;
}
