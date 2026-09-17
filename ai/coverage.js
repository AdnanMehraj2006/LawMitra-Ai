const COVERAGE_GAPS_KEY = "lawmitra_coverage_gaps_v1";
const MAX_GAPS = 100;

export function recordCoverageGap(classification) {
  if (classification?.responseType !== "fallback") return;

  const entry = {
    recordedAt: new Date().toISOString(),
    confidence: Number(classification.confidence || 0),
    matchedKeywords: Array.isArray(classification.matchedKeywords)
      ? classification.matchedKeywords.slice(0, 6)
      : []
  };

  try {
    const existing = JSON.parse(localStorage.getItem(COVERAGE_GAPS_KEY) || "[]");
    const items = Array.isArray(existing) ? existing : [];
    items.unshift(entry);
    localStorage.setItem(COVERAGE_GAPS_KEY, JSON.stringify(items.slice(0, MAX_GAPS)));
  } catch {
    // Coverage analytics are optional and never block legal guidance.
  }
}

export function exportCoverageGaps() {
  try {
    const items = JSON.parse(localStorage.getItem(COVERAGE_GAPS_KEY) || "[]");
    return JSON.stringify({ exportedAt: new Date().toISOString(), gaps: Array.isArray(items) ? items : [] }, null, 2);
  } catch {
    return JSON.stringify({ exportedAt: new Date().toISOString(), gaps: [] }, null, 2);
  }
}
