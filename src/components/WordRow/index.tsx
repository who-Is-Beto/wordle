import { FC, ReactNode } from "react";
import CharacterBox from "../Borard/CharacterBox";
import { CharBoxStates } from "../../enums";

export const WORD_LENGTH = 5;

declare type WordRowProps = {
  word: string;
  isInModal: boolean;
  result?: CharBoxStates[];
};

const WordRow: FC<WordRowProps> = ({
  word = "",
  result = [],
  isInModal
}): ReactNode => {
  const remainingLetters = WORD_LENGTH - word.length;

  const letters = word
    .split("")
    .concat(Array(remainingLetters).fill(""))
    .map((letter, index) => (
      <CharacterBox
        isInModal={isInModal}
        key={index}
        character={letter}
        state={result[index]}
      />
    ));

  return <div className="flex gap-2 w-full">{letters}</div>;
};

export default WordRow;
