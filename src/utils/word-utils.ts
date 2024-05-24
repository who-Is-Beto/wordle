import { CharBoxStates } from "../enums";
import words from "../words.json";

const getWordsWithSpecificLength = (length: number): string[] => {
  const wordsWithSpecificLength = (words as Array<string>).filter(
    (word) => word.length === length
  );
  return wordsWithSpecificLength;
};

export const getRandomWord = (): string => {
  const filteredWords = getWordsWithSpecificLength(5);
  const randomIndex = Math.floor(Math.random() * filteredWords.length);
  return filteredWords[randomIndex];
};

export const getGuess = (guess: string, answer: string): CharBoxStates[] => {
  const result: CharBoxStates[] = [];
  if (answer.length !== guess.length) return result;
  const answerCount = new Map<string, number>();
  const answerArray = answer.split("");
  const guessArray = guess.split("");

  guessArray.forEach((character, index) => {
    const currentChar = answerArray[index];
    answerCount.set(
      currentChar,
      answerCount.get(currentChar) ? answerCount.get(currentChar)! + 1 : 1
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

      if (answerCount.get(currentGuessChar)! <= 0) {
        result[resultIndex] = CharBoxStates.miss;
      }
    });

    answerCount.get(currentGuessChar)! - 1;
  });
  return result;
};

export const isValidWord = (word: string): boolean => {
  const wordsWithSpecificLength = getWordsWithSpecificLength(5);
  return wordsWithSpecificLength.concat(wordsWithSpecificLength).includes(word);
};
