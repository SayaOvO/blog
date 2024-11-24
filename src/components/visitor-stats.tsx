"use client";
import useSWR from "swr";
import { useEffect } from "react";
import styles from "./visitor-stats.module.css";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  return res.json();
};
const apiURL = "https://visitor-worker.sayaovo.workers.dev/";
export function VisitorsStats() {
  const { data } = useSWR(apiURL, fetcher);

  useEffect(() => {
    // deduplicate in the server side
    fetch(apiURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((error: Error) => {
      console.log("[VistorsStats]: ", error.message);
    });
  }, []);

  return (
    <>
      {data ? (
        <p className={styles.visitors}>All my blog visitors: {data.views}</p>
      ) : null}
    </>
  );
}
