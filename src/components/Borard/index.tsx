import { FC, ReactNode } from "react";
import WordRow from "../WordRow";

const Borad: FC = (): ReactNode => {
  return (
    <main className="flex flex-col gap-4">
      <WordRow word="he" />
      <WordRow word="hel" />
      <WordRow word="hello" />
    </main>
  );
};

export default Borad;
