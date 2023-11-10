export function domInjector(selector) {
    return function (target, propertyKey) {
        console.log(`Modifying prototype ${target.constructor.name} and adding getter for property ${propertyKey}`);
        let element;
        const getter = function () {
            if (!element) {
                element = document.querySelector(selector);
                console.log(`Search element of DOM with selector ${selector} for inject in ${propertyKey} `);
            }
            return element;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
