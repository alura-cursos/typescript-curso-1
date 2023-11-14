export interface IComparable<T> {
  isEqual: (object: T) => boolean
}
