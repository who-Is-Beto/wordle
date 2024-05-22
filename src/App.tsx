import { FC, ReactNode } from "react";
import Borad from "./components/Borard";
import Keyboard from "./components/Keyboard";

const App: FC = (): ReactNode => {
  return (
    <div>
      <Borad />
      <Keyboard />
    </div>
  );
};

export default App;
