import { FC, ReactNode } from "react";
import { CharBoxStates } from "../../enums";

const keyboardKeys = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ñ"],
  ["Enter", "z", "x", "c", "v", "b", "n", "m", "delete"]
];

const keyStateStyles = new Map<CharBoxState, string>([
  [CharBoxStates.hit, "bg-green-box"],
  [CharBoxStates.present, "bg-yellow-box"],
  [CharBoxStates.miss, "bg-gray-miss-box"]
]);

const backspace = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-12 mx-auto"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"
    ></path>
  </svg>
);

type KeyboardProps = {
  onClick: (key: string) => void;
  store: Store;
};

const Keyboard: FC<KeyboardProps> = ({
  onClick,
  store: { keyboardLetterState }
}): ReactNode => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { textContent, innerHTML } = e.currentTarget;
    let returnProps = textContent!;
    if (textContent !== innerHTML) {
      returnProps = "Backspace";
    }

    onClick(returnProps);
  };

  return (
    <section className="bg-light-gray w-full  rounded-lg p-4">
      {keyboardKeys.map((keyboardRow, rowIndex) => (
        <div
          key={rowIndex}
          className={`my-2 flex justify-center gap-1 ${
            rowIndex === 1 && "px-3"
          }`}
        >
          {keyboardRow.map((key, index) => {
            const letterState = keyStateStyles.get(
              keyboardLetterState[
                key.toLocaleUpperCase() as keyof KeyboardLetterState
              ]
            );
            let styles = `rounded-md gird m-0 duration-100 place-items-center font-medium uppercase flex-1 p-2 ${
              !letterState && "bg-mid-gray"
            } text-dark-gray active:-translate-y-6 active:scale-125`;

            if (letterState) {
              styles += " text-white-box-letter px-1 " + letterState;
            }
            return (
              <button
                onClick={handleClick}
                key={key + index}
                className={styles}
              >
                {key === "delete" ? backspace : key}
              </button>
            );
          })}
        </div>
      ))}
    </section>
  );
};

export default Keyboard;
