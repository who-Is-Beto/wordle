import { FC, ReactNode } from "react";

declare type CharacterBoxProps = {
  character: string;
};

const CharacterBox: FC<CharacterBoxProps> = ({ character }): ReactNode => {
  return (
    <div className="border w-8 h-8 grid place-items-center uppercase font-bold">
      {character}
    </div>
  );
};

export default CharacterBox;
