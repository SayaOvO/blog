import { useCallback, useSyncExternalStore } from "react";

type MediaQuery = `(${string}:${string})`

function getSnapshot(query: MediaQuery) {
  return window.matchMedia(query).matches;
}

function subscribe(onChange: () => void, query: MediaQuery) {
  const mql = window.matchMedia(query);
  mql.addEventListener("change", onChange);

  return () => {
    mql.removeEventListener("change", onChange);
  }
}
export function useMediaQuery(query: MediaQuery) {
  const subscribeMediaQuery = useCallback((onChange: () => void) => {
    return subscribe(onChange, query)
  }, [query]);

  const matches = useSyncExternalStore(
    subscribeMediaQuery,
    () => getSnapshot(query),
    () => false
  );
  return matches;

}
