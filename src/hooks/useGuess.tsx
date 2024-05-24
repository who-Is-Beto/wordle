import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../store/StoreProvider";
import { WORD_LENGTH } from "../components/WordRow";
import { CharBoxStates, StoreActionsTypes } from "../enums";
import { getGuess } from "../utils/word-utils";
import usePreviousValue from "./usePreviousValue";

const GUESS_CHANCES = 5;

const useGuess = () => {
  const [guess, setGuess] = useState<string>("");
  const {
    store: { answer, guess: globalGuess, rows: globalRows, gameState },
    dispatch
  } = useContext(StoreContext);
  const previousGuess = usePreviousValue(globalGuess);
  let rows = [...globalRows];
  if (rows.length < GUESS_CHANCES) {
    rows.push({ guess: globalGuess });
  }

  const numberOfGuessesRemaining = GUESS_CHANCES - rows.length;
  rows = rows.concat(Array(numberOfGuessesRemaining).fill(""));

  const addGuess = (wordToGuess: string): void => {
    const result = getGuess(wordToGuess, answer);
    const didWin = result.every((r) => r === CharBoxStates.hit);

    if (didWin) {
      dispatch({
        type: StoreActionsTypes.SET_GAME_STATE,
        payload: "won"
      });
    } else if (numberOfGuessesRemaining === 0) {
      dispatch({
        type: StoreActionsTypes.SET_GAME_STATE,
        payload: "lost"
      });
    }
    dispatch({
      type: StoreActionsTypes.ADD_GUESS,
      payload: { guess: globalGuess, result }
    });
  };

  const addGuessLetter = (letter: string): void => {
    setGuess((prev) => {
      const newGuess =
        letter.length === 1 && prev.length !== WORD_LENGTH
          ? prev + letter
          : prev;

      switch (letter) {
        case "Backspace":
          return prev.slice(0, -1);
        case "Enter":
          if (newGuess.length === WORD_LENGTH) {
            return "";
          }
          return prev;
        default:
          break;
      }

      return newGuess;
    });
  };
  const onKeyDown = (event: KeyboardEvent) => {
    let letter = event.key;
    addGuessLetter(letter);
  };

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    if (guess.length > WORD_LENGTH) return;
    dispatch({ type: StoreActionsTypes.UPDATE_GUESS, payload: guess });
  }, [guess]);

  useEffect(() => {
    if (guess.length === 0 && previousGuess?.length === WORD_LENGTH) {
      addGuess(previousGuess);
    }
  }, [guess]);

  useEffect(() => {
    if (gameState === "playing" || gameState === "paused") return;
    if (gameState === "won") {
      dispatch({ type: StoreActionsTypes.SET_VICTORIES });
    }
    dispatch({ type: StoreActionsTypes.SET_MATCHES_PLAYED });
  }, [gameState]);

  return { rows, gameState, addGuessLetter };
};

export default useGuess;
