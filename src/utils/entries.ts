import { Entries, FromEntries } from 'types/common';

export function entries<T>(object: {}) {
  return Object.entries(object) as Entries<T>;
}

export function fromEntries<T extends [PropertyKey, any]>(
  entries: T[][]
): FromEntries<T> {
  return Object.fromEntries(entries) as FromEntries<T>;
}
