import { FC, ReactNode } from "react";
import Borad from "./components/Borard";
import Keyboard from "./components/Keyboard";
import useGuess from "./hooks/useGuess";

const App: FC = (): ReactNode => {
  const { rows, addGuessLetter } = useGuess();

  return (
    <main>
      <Borad rows={rows} />
      <Keyboard
        onClick={(key: string) => {
          addGuessLetter(key);
        }}
      />
    </main>
  );
};

export default App;
