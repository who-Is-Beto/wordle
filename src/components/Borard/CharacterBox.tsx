import { FC, ReactNode } from "react";
import { CharBoxStates } from "../../enums";

declare type CharacterBoxProps = {
  character: string;
  state: CharBoxState;
};

const CharBoxStatesStyles = new Map<CharBoxState, string>([
  [CharBoxStates.hit, "bg-green-500"],
  [CharBoxStates.present, "bg-yellow-500"],
  [CharBoxStates.miss, "bg-gray-500"]
]);
const CharacterBox: FC<CharacterBoxProps> = ({
  character,
  state
}): ReactNode => {
  const style = state == null ? "" : CharBoxStatesStyles.get(state) ?? "";
  return (
    <div
      className={`border w-8 h-8 grid place-items-center uppercase font-bold ${style}`}
    >
      {character}
    </div>
  );
};

export default CharacterBox;
