import { ageOrder, recommend, type AgeGroup, type Audience, type FinderState, type GroupSize, type PlayStyle, type PlayTypeId } from "../data/quest";
import { content } from "../data/content";

type DialogMode = "intro" | "question" | "complete";
type StoredState = FinderState & {
  activeStep: number;
  dialogMode: DialogMode;
  recommendationApplied: boolean;
};

const root = document.querySelector<HTMLElement>("[data-home]");
if (!root) throw new Error("Questland home root missing.");

const locale = root.dataset.locale === "en" ? "en" : "de";
const t = content[locale];
const storageKey = "questland-finder";
const playTypeIds: PlayTypeId[] = ["monsterHunt", "teamBattles", "adventure", "deduction", "missions"];

const defaultState: StoredState = {
  ages: [],
  activeStep: 0,
  dialogMode: "intro",
  recommendationApplied: false
};

function loadState(): StoredState {
  try {
    const stored = JSON.parse(sessionStorage.getItem(storageKey) || "null") as Partial<StoredState> | null;
    if (!stored) return { ...defaultState };
    return {
      ...defaultState,
      ...stored,
      ages: Array.isArray(stored.ages) ? stored.ages.filter((age): age is AgeGroup => ageOrder.includes(age as AgeGroup)) : []
    };
  } catch {
    return { ...defaultState };
  }
}

let state = loadState();
let openPlayType: PlayTypeId | null = null;

const finder = root.querySelector<HTMLElement>("[data-finder]");
const message = root.querySelector<HTMLElement>("[data-npc-message]");
const intro = root.querySelector<HTMLElement>("[data-finder-intro]");
const questions = root.querySelector<HTMLElement>("[data-finder-questions]");
const complete = root.querySelector<HTMLElement>("[data-finder-complete]");
const backButton = root.querySelector<HTMLButtonElement>("[data-finder-back]");
const nextButton = root.querySelector<HTMLButtonElement>("[data-finder-next]");
const profile = root.querySelector<HTMLElement>("[data-selection-profile]");
const profileChips = root.querySelector<HTMLElement>("[data-selection-chips]");
const questList = root.querySelector<HTMLElement>("[data-quest-list]");
const recommendationIntro = root.querySelector<HTMLElement>("[data-recommendation-intro]");

const labels: Record<string, string> = {};
t.finder.questions.forEach((question) => {
  question.options.forEach(([value, label]) => {
    labels[value] = label;
  });
});

function saveState() {
  sessionStorage.setItem(storageKey, JSON.stringify(state));
}

function selectedValuesForStep(step: number): string[] {
  if (step === 0) return state.audience ? [state.audience] : [];
  if (step === 1) return state.ages;
  if (step === 2) return state.groupSize ? [state.groupSize] : [];
  return state.style ? [state.style] : [];
}

function questionAnswered(step: number) {
  return selectedValuesForStep(step).length > 0;
}

function resetRecommendations() {
  state.recommendationApplied = false;
  recommendationIntro?.setAttribute("hidden", "");
  playTypeIds.forEach((id) => {
    const entry = questList?.querySelector<HTMLElement>(`[data-play-type="${id}"]`);
    if (!entry) return;
    entry.dataset.role = "standard";
    entry.querySelector<HTMLElement>("[data-rank]")?.setAttribute("hidden", "");
  });
  if (questList) {
    playTypeIds.forEach((id) => {
      const entry = questList.querySelector<HTMLElement>(`[data-play-type="${id}"]`);
      if (entry) questList.append(entry);
    });
  }
}

function renderProfile() {
  if (!profile || !profileChips) return;
  profileChips.replaceChildren();
  const values = [
    state.audience ? { step: 0, label: labels[state.audience] } : null,
    state.ages.length ? { step: 1, label: state.ages.map((age) => labels[age]).join(" · ") } : null,
    state.groupSize ? { step: 2, label: labels[state.groupSize] } : null,
    state.style ? { step: 3, label: labels[state.style] } : null
  ].filter(Boolean) as { step: number; label: string }[];

  profile.toggleAttribute("hidden", values.length === 0);
  values.forEach(({ step, label }) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "profile-chip";
    chip.textContent = label;
    chip.dataset.editStep = String(step);
    chip.addEventListener("click", () => editStep(step));
    profileChips.append(chip);
  });
}

function renderAnswers() {
  finder?.querySelectorAll<HTMLButtonElement>("[data-answer]").forEach((button) => {
    const fieldset = button.closest<HTMLElement>("[data-step]");
    const step = Number(fieldset?.dataset.step || 0);
    const selected = selectedValuesForStep(step).includes(button.dataset.answer || "");
    button.classList.toggle("is-selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
}

function currentMessage() {
  if (state.dialogMode === "intro") return t.finder.greeting;
  if (state.dialogMode === "complete") return t.finder.completion;
  return t.finder.questions[state.activeStep].text;
}

function renderFinder({ focus = false } = {}) {
  if (!message || !intro || !questions || !complete || !nextButton || !backButton) return;
  message.classList.remove("is-changing");
  void message.offsetWidth;
  message.textContent = currentMessage();
  message.classList.add("is-changing");

  intro.toggleAttribute("hidden", state.dialogMode !== "intro");
  questions.toggleAttribute("hidden", state.dialogMode !== "question");
  complete.toggleAttribute("hidden", state.dialogMode !== "complete");

  finder?.querySelectorAll<HTMLElement>("[data-step]").forEach((step) => {
    const active = state.dialogMode === "question" && Number(step.dataset.step) === state.activeStep;
    step.toggleAttribute("hidden", !active);
  });

  backButton.disabled = state.activeStep === 0;
  nextButton.disabled = !questionAnswered(state.activeStep);
  renderAnswers();
  renderProfile();
  saveState();

  if (focus && state.dialogMode === "question") {
    finder?.querySelector<HTMLElement>(`[data-step="${state.activeStep}"] [data-answer]`)?.focus();
  }
}

function startFinder() {
  state.dialogMode = "question";
  state.activeStep = 0;
  resetRecommendations();
  renderFinder({ focus: true });
}

function setAnswer(step: number, value: string) {
  if (step === 0) state.audience = value as Audience;
  if (step === 1) {
    const age = value as AgeGroup;
    state.ages = state.ages.includes(age)
      ? state.ages.filter((item) => item !== age)
      : [...state.ages, age].sort((a, b) => ageOrder.indexOf(a) - ageOrder.indexOf(b));
  }
  if (step === 2) state.groupSize = value as GroupSize;
  if (step === 3) state.style = value as PlayStyle;
  resetRecommendations();
  renderFinder();
}

function continueFinder() {
  if (!questionAnswered(state.activeStep)) return;
  if (state.activeStep < 3) {
    state.activeStep += 1;
    renderFinder({ focus: true });
    return;
  }
  state.dialogMode = "complete";
  renderFinder({ focus: true });
}

function editStep(step: number) {
  state.dialogMode = "question";
  state.activeStep = step;
  resetRecommendations();
  renderFinder({ focus: true });
}

function setQuestOpen(id: PlayTypeId | null) {
  openPlayType = id;
  playTypeIds.forEach((playTypeId) => {
    const entry = questList?.querySelector<HTMLElement>(`[data-play-type="${playTypeId}"]`);
    const toggle = entry?.querySelector<HTMLButtonElement>("[data-quest-toggle]");
    const details = entry?.querySelector<HTMLElement>("[data-quest-details]");
    const open = playTypeId === id;
    entry?.classList.toggle("is-open", open);
    toggle?.setAttribute("aria-expanded", String(open));
    details?.toggleAttribute("hidden", !open);
  });
}

function applyRecommendations({ scroll = true }: { scroll?: boolean } = {}) {
  const result = recommend(state);
  if (!result || !questList) return;
  state.recommendationApplied = true;
  recommendationIntro?.removeAttribute("hidden");

  const ordered = [result.primary, ...result.alternatives, ...playTypeIds.filter((id) => id !== result.primary && !result.alternatives.includes(id))];
  ordered.forEach((id, index) => {
    const entry = questList.querySelector<HTMLElement>(`[data-play-type="${id}"]`);
    if (!entry) return;
    entry.dataset.role = index === 0 ? "primary" : index < 3 ? "alternative" : "standard";
    const rank = entry.querySelector<HTMLElement>("[data-rank]");
    if (rank && index < 3) {
      rank.textContent = index === 0 ? t.questlog.main : t.questlog.alternative;
      rank.removeAttribute("hidden");
    } else {
      rank?.setAttribute("hidden", "");
    }
    questList.append(entry);
  });

  setQuestOpen(result.primary);
  saveState();
  if (scroll) {
    document.querySelector("#game-types")?.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  }
}

finder?.querySelector("[data-finder-start]")?.addEventListener("click", startFinder);
finder?.querySelectorAll<HTMLButtonElement>("[data-answer]").forEach((button) => {
  button.addEventListener("click", () => {
    const step = Number(button.closest<HTMLElement>("[data-step]")?.dataset.step || 0);
    setAnswer(step, button.dataset.answer || "");
  });
});
nextButton?.addEventListener("click", continueFinder);
backButton?.addEventListener("click", () => {
  if (state.activeStep > 0) {
    state.activeStep -= 1;
    state.dialogMode = "question";
    resetRecommendations();
    renderFinder({ focus: true });
  }
});
finder?.querySelector("[data-show-quests]")?.addEventListener("click", () => applyRecommendations());

questList?.querySelectorAll<HTMLButtonElement>("[data-quest-toggle]").forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const entry = toggle.closest<HTMLElement>("[data-play-type]");
    const id = entry?.dataset.playType as PlayTypeId | undefined;
    if (id) setQuestOpen(openPlayType === id ? null : id);
  });
});

const revealElements = root.querySelectorAll<HTMLElement>(".reveal");
if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
  revealElements.forEach((element) => element.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
  revealElements.forEach((element) => observer.observe(element));
}

renderFinder();
if (state.recommendationApplied && recommend(state)) applyRecommendations({ scroll: false });
