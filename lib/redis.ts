import { Redis } from "@upstash/redis";

export const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});

export const views = (async function () {
  let views: number;
  if (process.env.VERCEL_ENV === "production") {
    views = await redis.incr("total_page_views");
  } else {
    views = 2345;
  }
  return views;
});

