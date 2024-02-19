import { LegacyRef, MutableRefObject, RefCallback } from 'react';

export function mergeRefs<T>(
  ...refs: Array<MutableRefObject<T> | LegacyRef<T> | null>
): RefCallback<T> {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(value);
      } else if (ref != null) {
        (ref as React.MutableRefObject<T | null>).current = value;
      }
    });
  };
}
