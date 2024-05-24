import { FC, ReactNode } from "react";
import WordRow from "../WordRow";

type BoardProps = {
  rows: GuessRow[];
};

const Borad: FC<BoardProps> = ({ rows }): ReactNode => {
  return (
    <main className="flex flex-col gap-4">
      {rows.map(
        ({ guess, result }, index): JSX.Element => (
          <WordRow key={index} word={guess} result={result} />
        )
      )}
    </main>
  );
};

export default Borad;
