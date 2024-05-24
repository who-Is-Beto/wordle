import { FC, ReactNode } from "react";
import { CharBoxStates } from "../../enums";

declare type CharacterBoxProps = {
  character: string;
  isInModal: boolean;
  state: CharBoxState;
};

const CharBoxStatesStyles = new Map<CharBoxState, string>([
  [CharBoxStates.hit, "green-box"],
  [CharBoxStates.present, "yellow-box"],
  [CharBoxStates.miss, "gray-miss-box"]
]);
const CharacterBox: FC<CharacterBoxProps> = ({
  character,
  state,
  isInModal
}): ReactNode => {
  const stateColor = CharBoxStatesStyles.get(state);
  const style =
    state == null
      ? "bg-gray-empty text-dark-gray"
      : `bg-${stateColor} border-${stateColor ? stateColor : "[1px]"}` ?? "";

  const computedStyles = isInModal
    ? "w-12 h-12"
    : "w-14 h-14 text-white-box-letter ";

  return (
    <div
      className={`${computedStyles} ${style} grid place-items-center uppercase text-2xl rounded-md font-bold`}
    >
      {character}
    </div>
  );
};

export default CharacterBox;
