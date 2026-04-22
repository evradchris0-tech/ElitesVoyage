type HapticIntensity = "light" | "medium" | "strong" | "success";

const PATTERNS: Record<HapticIntensity, number | number[]> = {
  light: 8,
  medium: 14,
  strong: 22,
  success: [10, 40, 20],
};

export function haptic(intensity: HapticIntensity = "light") {
  if (typeof window === "undefined") return;
  if (typeof navigator === "undefined" || !navigator.vibrate) return;
  try {
    navigator.vibrate(PATTERNS[intensity]);
  } catch {
    // ignore — some browsers block vibrate without user gesture
  }
}
