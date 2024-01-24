"use client";

import { useEffect } from "react";

export function VistorsStats() {

  useEffect(() => {
    fetch("https://visitor-worker.sayaovo.workers.dev/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
    })
  }, [])
  return null;
}