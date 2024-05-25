declare type CharBoxState =
  | CharBoxState.miss
  | CharBoxState.hit
  | CharBoxState.present;

declare type themeModes = "dark" | "light";
declare type GameStates = "playing" | "won" | "lost" | "paused";

declare interface GuessRow {
  guess: string;
  result?: CharBoxState[];
}

declare type TimeRemaining = {
  minutes: number;
  seconds: number;
};

declare type KeyboardLetterState = {
  foundLetter: CharBoxState;
  state: CharBoxState;
};

declare interface Store {
  firstTimePlaying: boolean;
  answer: string;
  timeRemaining: TimeRemaining;
  matchesPlayed: number;
  seeInstructions: boolean;
  victories: number;
  rows: GuessRow[];
  keyboardLetterState: KeyboardLetterState;
  gameState: GameStates;
  themeMode: themeModes;
  guess: string;
}

declare type StoreActions = {
  type: StoreActionsTypes;
  payload?: unknown;
};
