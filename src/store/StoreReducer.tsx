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
    keyboardLetterState: {} as KeyboardLetterState,
    gameState: "playing",
    timeRemaining: {
      minutes: 5,
      seconds: 0
    },
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

const toggleSeeInstructions = (store: Store): Store => {
  return {
    ...store,
    seeInstructions: !store.seeInstructions
  };
};

const setFirstTimePlaying = (store: Store): Store => {
  return {
    ...store,
    firstTimePlaying: false
  };
};

const setTimeRemaining = (store: Store, time: TimeRemaining): Store => {
  return {
    ...store,
    timeRemaining: time
  };
};

const setKeyboardLetterState = (
  store: Store,
  setKeyboardLetterState: KeyboardLetterState
): Store => {
  return {
    ...store,
    keyboardLetterState: {
      ...store.keyboardLetterState,
      [setKeyboardLetterState.foundLetter]: setKeyboardLetterState.state
    }
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
    case StoreActionsTypes.TOGGLE_SEE_INSTRUCTIONS:
      return toggleSeeInstructions(state);
    case StoreActionsTypes.SET_FIRST_TIME_PLAYING:
      return setFirstTimePlaying(state);
    case StoreActionsTypes.SET_TIME_REMAINING:
      return setTimeRemaining(state, action.payload as TimeRemaining);
    case StoreActionsTypes.SET_KEYBOARD_LETTER_STATE:
      return setKeyboardLetterState(
        state,
        action.payload as KeyboardLetterState
      );

    default:
      return state;
  }
};
export default reducers;
