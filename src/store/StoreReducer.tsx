import { StoreActionsTypes, themeModes } from "../enums";
import { getRandomWord } from "../utils/word-utils";

const setAnswer = (store: Store, answer: string): Store => {
  return {
    ...store,
    answer: answer.toLocaleUpperCase()
  };
};

const toggleDarkMode = (store: Store): Store => {
  return {
    ...store,
    themeMode:
      store.themeMode === themeModes.dark ? themeModes.light : themeModes.dark
  };
};

const updateGuess = (store: Store, guess: string): Store => {
  return {
    ...store,
    guess: guess.toLocaleUpperCase(),
    rows: [...store.rows]
  };
};

const addGuess = (store: Store, payload: GuessRow): Store => {
  return {
    ...store,
    guess: "",
    rows: [...store.rows, payload]
  };
};

const newGame = (store: Store): Store => {
  return {
    ...store,
    answer: getRandomWord().toLocaleUpperCase(),
    rows: [],
    gameState: "playing",
    guess: ""
  };
};

const setGameState = (store: Store, newGameSatate: GameStates): Store => {
  return {
    ...store,
    gameState: newGameSatate
  };
};

const setVictories = (store: Store): Store => {
  return {
    ...store,
    victories: store.victories + 1
  };
};

const setMatchesPlayed = (store: Store): Store => {
  return {
    ...store,
    matchesPlayed: store.matchesPlayed + 1
  };
};

const reducers = (state: Store, action: StoreActions): Store => {
  switch (action.type) {
    case StoreActionsTypes.UPDATE_GUESS:
      return updateGuess(state, action.payload as string);
    case StoreActionsTypes.TOGGLE_DARK_MODE:
      return toggleDarkMode(state);
    case StoreActionsTypes.SET_ANSWER:
      return setAnswer(state, action.payload as string);
    case StoreActionsTypes.ADD_GUESS:
      return addGuess(state, action.payload as GuessRow);
    case StoreActionsTypes.NEW_GAME:
      return newGame(state);
    case StoreActionsTypes.SET_GAME_STATE:
      return setGameState(state, action.payload as GameStates);
    case StoreActionsTypes.SET_VICTORIES:
      return setVictories(state);
    case StoreActionsTypes.SET_MATCHES_PLAYED:
      return setMatchesPlayed(state);
    default:
      return state;
  }
};
export default reducers;
