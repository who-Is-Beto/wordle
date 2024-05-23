import { CharBoxStates } from "../enums";
import words from "../words.json";

const getAWordWithSpecificLength = (length: number): string[] => {
  const wordsWithSpecificLength = (words as Array<string>).filter(
    (word) => word.length === length
  );
  return wordsWithSpecificLength;
};

export const getRandomWord = (): string => {
  const filteredWords = getAWordWithSpecificLength(5);
  const randomIndex = Math.floor(Math.random() * filteredWords.length);
  return filteredWords[randomIndex];
};

const defaultWord = getRandomWord();

export const getGuess = (
  guess: string,
  answer: string = defaultWord
): CharBoxState[] => {
  const result: CharBoxState[] = [];
  if (answer.length !== guess.length) return result;
  const anwerCount = new Map<string, number>();
  const answerArray = answer.split("");
  const guessArray = guess.split("");

  guessArray.forEach((character, index) => {
    const currentChar = answerArray[index];
    anwerCount.set(
      currentChar,
      anwerCount.get(currentChar) ? anwerCount.get(currentChar)! + 1 : 1
    );

    if (currentChar === character) {
      result.push(CharBoxStates.hit);
    } else if (answerArray.includes(character)) {
      result.push(CharBoxStates.present);
    } else {
      result.push(CharBoxStates.miss);
    }
  });

  result.forEach((resultState, resultIndex) => {
    if (resultState !== CharBoxStates.present) return;

    const currentGuessChar = guessArray[resultIndex];

    answerArray.forEach((answerChar, answerIndex) => {
      if (answerChar !== currentGuessChar) return;

      if (result[answerIndex] === CharBoxStates.hit) {
        result[resultIndex] = CharBoxStates.miss;
      }

      if (anwerCount.get(currentGuessChar)! <= 0) {
        result[resultIndex] = CharBoxStates.miss;
      }
    });

    anwerCount.get(currentGuessChar)! - 1;
  });
  return result;
};
