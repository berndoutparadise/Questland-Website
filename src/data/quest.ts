export type Locale = "de" | "en";
export type Audience = "school" | "event" | "private";
export type AgeGroup = "5-7" | "8-11" | "12-15" | "16+";
export type GroupSize = "2-5" | "6-20" | "20+";
export type PlayStyle = "action" | "adventure" | "mix";
export type PlayTypeId = "monsterHunt" | "teamBattles" | "adventure" | "deduction" | "missions";

export interface FinderState {
  audience?: Audience;
  ages: AgeGroup[];
  groupSize?: GroupSize;
  style?: PlayStyle;
}

export interface Recommendation {
  primary: PlayTypeId;
  alternatives: [PlayTypeId, PlayTypeId];
}

type Matrix = Record<AgeGroup, Record<GroupSize, Record<PlayStyle, PlayTypeId[]>>>;

export const ageOrder: AgeGroup[] = ["5-7", "8-11", "12-15", "16+"];

export const recommendationMatrix: Matrix = {
  "5-7": {
    "2-5": {
      action: ["monsterHunt", "adventure"],
      adventure: ["adventure", "monsterHunt"],
      mix: ["adventure", "monsterHunt"]
    },
    "6-20": {
      action: ["teamBattles", "monsterHunt"],
      adventure: ["adventure", "monsterHunt"],
      mix: ["adventure", "monsterHunt"]
    },
    "20+": {
      action: ["teamBattles", "adventure"],
      adventure: ["adventure", "monsterHunt"],
      mix: ["adventure", "teamBattles"]
    }
  },
  "8-11": {
    "2-5": {
      action: ["monsterHunt", "teamBattles"],
      adventure: ["deduction", "adventure"],
      mix: ["adventure", "monsterHunt"]
    },
    "6-20": {
      action: ["teamBattles", "monsterHunt"],
      adventure: ["deduction", "adventure"],
      mix: ["adventure", "monsterHunt"]
    },
    "20+": {
      action: ["teamBattles", "adventure"],
      adventure: ["adventure", "deduction"],
      mix: ["adventure", "teamBattles"]
    }
  },
  "12-15": {
    "2-5": {
      action: ["monsterHunt", "missions"],
      adventure: ["deduction", "adventure"],
      mix: ["missions", "adventure"]
    },
    "6-20": {
      action: ["missions", "teamBattles"],
      adventure: ["adventure", "deduction"],
      mix: ["missions", "adventure"]
    },
    "20+": {
      action: ["teamBattles", "missions"],
      adventure: ["adventure", "deduction"],
      mix: ["adventure", "missions"]
    }
  },
  "16+": {
    "2-5": {
      action: ["missions", "monsterHunt"],
      adventure: ["deduction", "adventure"],
      mix: ["missions", "adventure"]
    },
    "6-20": {
      action: ["missions", "teamBattles"],
      adventure: ["deduction", "adventure"],
      mix: ["missions", "adventure"]
    },
    "20+": {
      action: ["teamBattles", "missions"],
      adventure: ["adventure", "deduction"],
      mix: ["adventure", "missions"]
    }
  }
};

const fallbackOrder: PlayTypeId[] = ["monsterHunt", "teamBattles", "adventure", "deduction", "missions"];

export function recommend(state: FinderState): Recommendation | null {
  if (!state.ages.length || !state.groupSize || !state.style) return null;
  const youngest = ageOrder.find((age) => state.ages.includes(age));
  if (!youngest) return null;

  const candidates = [...recommendationMatrix[youngest][state.groupSize][state.style]];
  for (const fallback of fallbackOrder) {
    if (!candidates.includes(fallback)) candidates.push(fallback);
    if (candidates.length >= 3) break;
  }

  return {
    primary: candidates[0],
    alternatives: [candidates[1], candidates[2]]
  };
}
