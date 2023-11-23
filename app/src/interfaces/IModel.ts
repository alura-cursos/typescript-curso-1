import { type IComparable } from './IComparable';
import { type IPrintable } from './IPrintable';

export interface IModel<T> extends IPrintable, IComparable<T> {}
