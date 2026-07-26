import { content, playTypes } from "../data/content";
import { recommend, type FinderState } from "../data/quest";

const root = document.querySelector<HTMLElement>("[data-request-page]");
if (!root) throw new Error("Questland request root missing.");

const locale = root.dataset.locale === "en" ? "en" : "de";
const t = content[locale];

try {
  const state = JSON.parse(sessionStorage.getItem("questland-finder") || "null") as FinderState | null;
  const result = state ? recommend(state) : null;
  if (state && result) {
    const summary = root.querySelector<HTMLElement>("[data-form-summary]");
    const empty = root.querySelector<HTMLElement>("[data-summary-empty]");
    const list = root.querySelector<HTMLElement>("[data-summary-list]");
    empty?.setAttribute("hidden", "");
    list?.removeAttribute("hidden");

    const ageLabel = state.ages.join(" · ");
    const audienceLabels = locale === "de"
      ? { school: "Schule oder Camp", event: "Unternehmen oder Event", private: "Private Gruppe" }
      : { school: "School or camp", event: "Company or event", private: "Private group" };
    const sizeLabels = locale === "de"
      ? { "2-5": "2–5 Personen", "6-20": "6–20 Personen", "20+": "20+ Personen" }
      : { "2-5": "2–5 people", "6-20": "6–20 people", "20+": "20+ people" };
    const entries = [
      [t.request.fields.audience, state.audience ? audienceLabels[state.audience] : ""],
      [t.request.fields.ages, ageLabel],
      [t.request.fields.size, state.groupSize ? sizeLabels[state.groupSize] : ""],
      [locale === "de" ? "Empfohlene Spielarten" : "Recommended game types", [result.primary, ...result.alternatives].map((id) => playTypes[locale][id].title).join(" · ")]
    ];
    entries.forEach(([label, value]) => {
      const dt = document.createElement("dt");
      const dd = document.createElement("dd");
      dt.textContent = label;
      dd.textContent = value;
      list?.append(dt, dd);
    });
    summary?.classList.add("has-selection");

    const setHidden = (selector: string, value: string) => {
      const input = root.querySelector<HTMLInputElement>(selector);
      if (input) input.value = value;
    };
    setHidden("[data-hidden-audience]", state.audience || "");
    setHidden("[data-hidden-ages]", ageLabel);
    setHidden("[data-hidden-size]", state.groupSize || "");
    setHidden("[data-hidden-style]", state.style || "");
    setHidden("[data-hidden-recommendation]", [result.primary, ...result.alternatives].map((id) => playTypes[locale][id].title).join(", "));

    const audienceIndex = { school: 1, event: 2, private: 3 } as const;
    const audienceSelect = root.querySelector<HTMLSelectElement>('select[name="audience"]');
    if (audienceSelect && state.audience) audienceSelect.selectedIndex = audienceIndex[state.audience];
    const sizeIndex = { "2-5": 1, "6-20": 2, "20+": 3 } as const;
    const sizeSelect = root.querySelector<HTMLSelectElement>('select[name="group-size"]');
    if (sizeSelect && state.groupSize) sizeSelect.selectedIndex = sizeIndex[state.groupSize];
    state.ages.forEach((age) => {
      root.querySelector<HTMLInputElement>(`input[name="ages[]"][value="${age.replace("-", "–")}"]`)?.click();
    });
  }
} catch {
  // The form remains fully usable without stored finder data.
}

const revealElements = root.querySelectorAll<HTMLElement>(".reveal");
revealElements.forEach((element) => element.classList.add("is-visible"));
