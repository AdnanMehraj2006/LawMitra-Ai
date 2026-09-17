const JURISDICTION_KEY = "lawmitra_jurisdiction";

export function getJurisdiction() {
  try {
    return sessionStorage.getItem(JURISDICTION_KEY) || "";
  } catch {
    return "";
  }
}

export function setJurisdiction(value) {
  const jurisdiction = String(value || "").trim().slice(0, 80);
  try {
    if (jurisdiction) sessionStorage.setItem(JURISDICTION_KEY, jurisdiction);
    else sessionStorage.removeItem(JURISDICTION_KEY);
  } catch {
    // Jurisdiction remains available for the current interaction through the UI.
  }
  return jurisdiction;
}

export function jurisdictionNote() {
  const jurisdiction = getJurisdiction();
  return jurisdiction
    ? `\n\n**Jurisdiction note:** You selected **${jurisdiction}**. Procedures, forms, and local authorities can vary by State/UT; verify the local route before filing.`
    : "\n\n**Jurisdiction note:** Procedures can vary by State/UT. Share your State/UT for more relevant local next steps.";
}
