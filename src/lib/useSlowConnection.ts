"use client";

import { useEffect, useState } from "react";

type EffectiveType = "slow-2g" | "2g" | "3g" | "4g";

interface NetworkInformation extends EventTarget {
  effectiveType?: EffectiveType;
  saveData?: boolean;
  downlink?: number;
  rtt?: number;
  addEventListener(type: "change", listener: () => void): void;
  removeEventListener(type: "change", listener: () => void): void;
}

interface NavigatorWithConnection extends Navigator {
  connection?: NetworkInformation;
  mozConnection?: NetworkInformation;
  webkitConnection?: NetworkInformation;
}

function getConnection(): NetworkInformation | undefined {
  if (typeof navigator === "undefined") return undefined;
  const nav = navigator as NavigatorWithConnection;
  return nav.connection ?? nav.mozConnection ?? nav.webkitConnection;
}

export interface ConnectionInfo {
  isSlow: boolean;
  saveData: boolean;
  effectiveType: EffectiveType | "unknown";
}

export function useSlowConnection(): ConnectionInfo {
  const [state, setState] = useState<ConnectionInfo>({
    isSlow: false,
    saveData: false,
    effectiveType: "unknown",
  });

  useEffect(() => {
    const conn = getConnection();
    if (!conn) return;

    const update = () => {
      const type = conn.effectiveType ?? "unknown";
      const saveData = conn.saveData === true;
      const isSlow = saveData || type === "slow-2g" || type === "2g" || type === "3g";
      setState({ isSlow, saveData, effectiveType: type });
    };

    update();
    conn.addEventListener("change", update);
    return () => conn.removeEventListener("change", update);
  }, []);

  return state;
}
