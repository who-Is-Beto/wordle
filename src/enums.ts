export enum CharBoxStates {
  miss,
  hit,
  present
}

export enum themeModes {
  dark = "dark",
  light = "light"
}

export enum ActionTypes {
  SWITCH_DARK_MODE = "SWITCH_DARK_MODE"
}

export enum StoreActionsTypes {
  SET_ANSWER,
  ADD_GUESS,
  UPDATE_GUESS,
  SET_FIRST_TIME_PLAYING,
  TOGGLE_DARK_MODE,
  NEW_GAME,
  SET_GAME_STATE,
  SET_VICTORIES,
  SET_MATCHES_PLAYED
}
