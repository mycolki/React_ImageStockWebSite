export function isNil<T>(val: T | undefined | null): val is null | undefined {
  return val == null;
}

export function isNotNil<T>(val: T | undefined | null): val is T {
  return val != null;
}
