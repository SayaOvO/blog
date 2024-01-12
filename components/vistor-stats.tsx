"use client";

import { useEffect } from "react";

export function VistorsStats() {

  useEffect(() => {
    fetch("/api/incr", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
    })
  }, [])
  return null;
}