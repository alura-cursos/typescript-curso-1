import { type IPrintable } from '../interfaces/IPrintable.js';

export function printOut(...objects: Array<IPrintable>) {
  for (let object of objects) {
    console.log(object.convertForText());
  }
}
