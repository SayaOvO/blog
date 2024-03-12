"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useMemo, useState, useEffect } from "react";
import * as stylex from "@stylexjs/stylex";

import { useMediaQuery } from "@/hooks/use-media-query"
import { colors } from "../app/globalTokens.stylex"

/* It's ineffective, I think it's better to create a mobile-toc component */
export function TocContainer({
  children
}: {
    children: React.ReactNode
  }) {

  const [showDescription, setShowDescription] = useState(true)


  const matches = useMediaQuery("(max-width: 768px)")

  useEffect(() => {
    const toggle = () => {
      setShowDescription(window.scrollY < 200)
    };

    window.addEventListener('scroll', toggle);
  }, [])


  const toc = useMemo(() => matches ? (
    <DropdownMenu.Root modal={false}>
      <DropdownMenu.Trigger asChild>
        <button {...stylex.props(styles.button)}>
          <span 
            {...stylex.props(showDescription ? styles.showSpan : styles.hideSpan)}
          >
            显示目录
          </span>
          <svg 
            width="15" 
            height="15" 
            viewBox="0 0 15 15" 
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{display:"inline-block",height:"1.1em"}}
          >
              <path d="M1.5 5.25C1.91421 5.25 2.25 4.91421 2.25 4.5C2.25 4.08579 1.91421 3.75 1.5 3.75C1.08579 3.75 0.75 4.08579 0.75 4.5C0.75 4.91421 1.08579 5.25 1.5 5.25ZM4 4.5C4 4.22386 4.22386 4 4.5 4H13.5C13.7761 4 14 4.22386 14 4.5C14 4.77614 13.7761 5 13.5 5H4.5C4.22386 5 4 4.77614 4 4.5ZM4.5 7C4.22386 7 4 7.22386 4 7.5C4 7.77614 4.22386 8 4.5 8H13.5C13.7761 8 14 7.77614 14 7.5C14 7.22386 13.7761 7 13.5 7H4.5ZM4.5 10C4.22386 10 4 10.2239 4 10.5C4 10.7761 4.22386 11 4.5 11H13.5C13.7761 11 14 10.7761 14 10.5C14 10.2239 13.7761 10 13.5 10H4.5ZM2.25 7.5C2.25 7.91421 1.91421 8.25 1.5 8.25C1.08579 8.25 0.75 7.91421 0.75 7.5C0.75 7.08579 1.08579 6.75 1.5 6.75C1.91421 6.75 2.25 7.08579 2.25 7.5ZM1.5 11.25C1.91421 11.25 2.25 10.9142 2.25 10.5C2.25 10.0858 1.91421 9.75 1.5 9.75C1.08579 9.75 0.75 10.0858 0.75 10.5C0.75 10.9142 1.08579 11.25 1.5 11.25Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd">
            </path>
          </svg>
         </button>
      </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
        <DropdownMenu.Content align="end" sideOffset={5} {...stylex.props(styles.content)}>
          {children}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  ) : children, [matches, showDescription]);

  return (
    <>
      {toc}
    </>
  )
}

const styles = stylex.create({
  showSpan: {
    display: "inline",
  },
  hideSpan: {
    display:"none",
  },
  button: {
    display: "flex",
    alignItems: "center",
    gap: "3px",
    position: "fixed",
    right: "24px",
    top: "64px",
    padding: "6px",
    outline: 'none',
    ":hover": {
      cursor: "pointer"
    },
    border: "1px solid",
    borderRadius: "3px"
  },
  content: {
    outline: "2px solid #798fef !important",
    borderRadius: "8px",
    outlineOffset: "1px",
  }
})
