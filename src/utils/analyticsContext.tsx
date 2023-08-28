import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";
import { getSelectorsByUserAgent } from "react-device-detect";
import { ANALYTICS_PROJECT, IS_DEV_MODE } from "../config";
import { isBot, mapReferer } from "./tracking";
import { v4 as uuidv4 } from "uuid";

const BASE_URL = "https://y.aram.zone";
// const BASE_URL = "http://localhost:4001";

interface Event {
  name: string;
  group?: string;
  data?: Record<string, string | number | boolean>;
}

export interface AnalyticsContext {
  logEvent: ({ name, group, data }: Event) => void;
}

export const AnalyticsContext = createContext<AnalyticsContext | null>(null);

export function AnalyticsProvider({ children }: { children: JSX.Element }) {
  const router = useRouter();
  const [uid, setUid] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !uid) {
      return;
    }

    const routeHandler = handleRouteChange(uid);
    router.events.on("routeChangeStart", routeHandler);
    return () => router.events.off("routeChangeStart", routeHandler);
  }, [uid]);

  useEffect(() => {
    const newUid = getOrCreateUid();
    setUid(newUid);
    // Initial url. Kind of a hack.
    handleRouteChange(newUid)(router.asPath);
  }, []);

  return (
    <AnalyticsContext.Provider
      value={{
        logEvent: (event) => logEvent(uid!, event),
      }}
    >
      {children}
    </AnalyticsContext.Provider>
  );
}

export const useAnalyticsContext = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error(
      "useAnalyticsContext must be used within a AnalyticsPrivoder"
    );
  }
  return context;
};

const handleRouteChange = (uid: string) => (url: string) => {
  if (IS_DEV_MODE) {
    return;
  }
  if (isBot(navigator.userAgent)) {
    return;
  }
  const { isMobile } = getSelectorsByUserAgent(navigator.userAgent);
  const data: Record<string, string | null> = {
    referrer: mapReferer(document.referrer),
    userAgent: navigator.userAgent,
    language: navigator.language,
    isMobile,
    location: Intl.DateTimeFormat().resolvedOptions().timeZone,
  };

  fetch(`${BASE_URL}/pageview`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      project: ANALYTICS_PROJECT,
      identifier: uid,
      page: url,
      data,
    }),
  });
};

function logEvent(uid: string, { name, group, data }: Event) {
  if (IS_DEV_MODE) {
    return;
  }
  if (isBot(navigator.userAgent)) {
    return;
  }
  console.log(`Analytics event: ${group}/${name} - ${JSON.stringify(data)}`);
  fetch(`${BASE_URL}/event`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      project: ANALYTICS_PROJECT,
      identifier: uid,
      name,
      group,
      data,
    }),
  });
}

const UID_KEY = "gnardini/uid";
export function getOrCreateUid() {
  let uid = localStorage.getItem(UID_KEY);
  if (!uid) {
    uid = uuidv4();
    localStorage.setItem(UID_KEY, uid);
  }
  return uid;
}
