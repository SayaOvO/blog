"use client";

import { Toc } from "@/types/toc";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useRef,
  useState,
} from "react";

type ActiveAnchor = Record<
  string,
  {
    aboveHalfViewport: boolean;
    insideHalfViewport: boolean;
  }
>;

const IntersectionObserverContext = createContext<IntersectionObserver | null>(
  null,
);

const ActiveAnchorContext = createContext<ActiveAnchor>({});
const SetActiveAnchorContext = createContext<
  Dispatch<SetStateAction<ActiveAnchor>>
>((v) => v);

export const useIntersectionObserver = () =>
  useContext(IntersectionObserverContext);

export const useActiveAnchor = (toc: Toc) => {
  const anchor = useContext(ActiveAnchorContext);

  let activeAnchor = toc.find(
    (heading) => anchor[heading.id]?.insideHalfViewport,
  );
  if (!activeAnchor) {
    activeAnchor = toc.findLast(
      (heading) => anchor[heading.id]?.aboveHalfViewport,
    );
  }
  return activeAnchor;
};

export const useSetActiveAchor = () => useContext(SetActiveAnchorContext);

export const ActiveAnchorProvider = ({ children }: { children: ReactNode }) => {
  const [activeAnchor, setActiveAnchor] = useState<ActiveAnchor>({});
  const observerRef = useRef<IntersectionObserver | null>(null);

  if (typeof window !== "undefined" && !observerRef.current) {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          setActiveAnchor((f) => {
            const ret = { ...f };
            if (entry?.rootBounds) {
              const aboveHalfViewport =
                entry.boundingClientRect.y + entry.boundingClientRect.height <=
                entry.rootBounds.y + entry.rootBounds.height;
              const insideHalfViewport = entry.intersectionRatio > 0;
              ret[entry.target.id] = {
                aboveHalfViewport,
                insideHalfViewport,
              };
            }
            return ret;
          });
        }
      },
      {
        rootMargin: "0px 0px -50%",
        threshold: [0, 1],
      },
    );
  }

  return (
    <ActiveAnchorContext.Provider value={activeAnchor}>
      <SetActiveAnchorContext.Provider value={setActiveAnchor}>
        <IntersectionObserverContext.Provider value={observerRef.current}>
          {children}
        </IntersectionObserverContext.Provider>
      </SetActiveAnchorContext.Provider>
    </ActiveAnchorContext.Provider>
  );
};
