import { useEffect } from 'react';

export function getFileExtension(file) {
  const nameSplit = file.name.split('.');
  const fileExtension = nameSplit[nameSplit.length - 1];

  return fileExtension;
}

export function useDebounce(ms, fn, deps) {
  useEffect(() => {
    if (!ms) return fn();

    const timeoutId = setTimeout(fn, ms);

    return () => clearTimeout(timeoutId);
  }, deps);
}
