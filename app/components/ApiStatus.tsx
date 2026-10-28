
"use client";

import { useEffect, useState } from "react";

type ApiState = "loading" | "ok" | "error";

export default function ApiStatus() {
  const [status, setStatus] = useState<ApiState>("loading");

  useEffect(() => {
    async function checkApi() {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL;

        if (!baseUrl) {
          throw new Error("API URL is not configured");
        }

        const response = await fetch(
          `${baseUrl.replace(/\/+$/, "")}/health`
        );

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        setStatus("ok");
      } catch {
        setStatus("error");
      }
    }

    checkApi();
  }, []);

  return (
    <div
      className="mt-4 rounded-lg border border-gray-200 p-4"
      role="status"
      aria-live="polite"
    >
      <p className="font-medium">Backend API Status</p>

      {status === "loading" && (
        <p className="mt-2 text-gray-500">API: checking...</p>
      )}

      {status === "ok" && (
        <p className="mt-2 font-medium text-green-700">API: ok</p>
      )}

      {status === "error" && (
        <p className="mt-2 font-medium text-red-700">
          API: unavailable
        </p>
      )}
    </div>
  );
}
