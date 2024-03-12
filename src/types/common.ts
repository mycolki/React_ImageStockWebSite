export type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

export type FromEntries<T extends [PropertyKey, any]> = Record<T[0], T[1]>;
