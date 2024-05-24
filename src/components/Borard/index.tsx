import { FC, ReactNode } from "react";
import WordRow from "../WordRow";

type BoardProps = {
  rows: GuessRow[];
};

const Borad: FC<BoardProps> = ({ rows }): ReactNode => {
  return (
    <section className="flex flex-col gap-2">
      {rows.map(
        ({ guess, result }, index): JSX.Element => (
          <WordRow key={index} word={guess} isInModal={false} result={result} />
        )
      )}
    </section>
  );
};

export default Borad;
