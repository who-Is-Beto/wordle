import { FC, ReactNode } from "react";
import WordRow from "../WordRow";

const Borad: FC = (): ReactNode => {
  return (
    <main className="flex flex-col gap-4">
      <WordRow word="train" />
      <WordRow word="paper" />
      <WordRow word="hello" />
      <WordRow word="piano" />
      <WordRow word="i" />
    </main>
  );
};

export default Borad;
