"use client";

import {
  useIntersectionObserver,
  useSetActiveAchor,
} from "@/contexts/active-anchor";
import { ComponentProps, useEffect, useRef } from "react";

export function HeadingLink({
  tag: Tag,
  children,
  ...props
}: ComponentProps<"h2"> & {
  tag: `h${2 | 3 | 4 | 5 | 6}`;
}) {
  const obRef = useRef<HTMLHeadingElement>(null);
  const observer = useIntersectionObserver();
  const setActiveAnchor = useSetActiveAchor();

  useEffect(() => {
    const heading = obRef.current;
    if (!heading) return;
    observer?.observe(heading);
    return () => {
      observer?.disconnect();
      setActiveAnchor((f) => {
        const ret = { ...f };
        delete f[heading.id];
        return ret;
      });
    };
  }, [observer, setActiveAnchor]);

  return (
    <Tag {...props} ref={obRef}>
      {children}
    </Tag>
  );
}
