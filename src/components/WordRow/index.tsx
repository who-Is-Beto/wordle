import { FC, ReactNode } from "react";
import CharacterBox from "../Borard/CharacterBox";
import { getGuess } from "../../utils/word-utils";

const WORD_LENGTH = 5;

declare type WordRowProps = {
  word: string;
};

const WordRow: FC<WordRowProps> = ({ word = "" }): ReactNode => {
  const remainingLetters = WORD_LENGTH - word.length;
  const guessStates = getGuess(word);
  const letters = word
    .split("")
    .concat(Array(remainingLetters).fill(""))
    .map((letter, index) => (
      <CharacterBox key={index} character={letter} state={guessStates[index]} />
    ));

  return <div className="flex w-full justify-between">{letters}</div>;
};

export default WordRow;
