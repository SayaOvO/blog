"use client";
import { useIntersectionObserver } from "@/hooks/use-intersection";
import React, {
  createContext,
  useContext,
  useMemo,
  type RefObject,
} from "react";

interface AvatarContextData {
  isSticky: boolean;
  avatarRef: RefObject<HTMLElement> | null;
}
const AvatarContext = createContext<AvatarContextData>({
  isSticky: false,
  avatarRef: null,
});

export function AvatarProvider({ children }: { children: React.ReactNode }) {
  const [isSticky, avatarRef] = useIntersectionObserver({
    height: 64,
  });

  const value = useMemo(
    () => ({
      isSticky,
      avatarRef,
    }),
    [isSticky, avatarRef],
  );

  return (
    <AvatarContext.Provider value={value}>{children}</AvatarContext.Provider>
  );
}

export function useAvatar() {
  return useContext(AvatarContext);
}
