export function printOut(...objects) {
    for (let object of objects) {
        console.log(object.convertForText());
    }
}
