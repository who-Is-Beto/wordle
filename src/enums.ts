export enum CharBoxStates {
  miss,
  hit,
  present
}

export enum themeModes {
  dark = "dark",
  light = "light"
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
  SET_MATCHES_PLAYED,
  TOGGLE_SEE_INSTRUCTIONS,
  SET_TIME_REMAINING,
  SET_KEYBOARD_LETTER_STATE
}
