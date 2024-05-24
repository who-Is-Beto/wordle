declare type CharBoxState =
  | CharBoxState.miss
  | CharBoxState.hit
  | CharBoxState.present;

declare type themeModes = "dark" | "light";
declare type GameStates = "playing" | "won" | "lost";

declare interface GuessRow {
  guess: string;
  result?: CharBoxState[];
}
declare interface Store {
  firstTimePlaying: boolean;
  answer: string;
  matchesPlayed: number;
  victories: number;
  rows: GuessRow[];
  gameState: GameStates;
  themeMode: themeModes;
  guess: string;
}

declare type StoreActions = {
  type: StoreActionsTypes;
  payload?: unknown;
};
