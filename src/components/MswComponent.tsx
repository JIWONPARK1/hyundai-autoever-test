"use client";

import { useEffect } from "react";

export const MswComponent = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      (async () => {
        const { worker } = await import("../../mocks/browser");
        worker.start({ onUnhandledRequest: "bypass" });
      })();
    }
  }, []);

  return null;
};
