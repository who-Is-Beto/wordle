import { FC, ReactNode } from "react";
import { StoreActionsTypes } from "../../../enums";
import WordRow from "../../WordRow";

type InstructionsProps = {
  store: Store;
  dispatch: React.Dispatch<StoreActions>;
};

const Instructions: FC<InstructionsProps> = ({
  dispatch,
  store: { firstTimePlaying }
}): ReactNode => {
  const closeModal = () => {
    dispatch({ type: StoreActionsTypes.TOGGLE_SEE_INSTRUCTIONS });
  };

  const startFirstGame = (): void => {
    dispatch({ type: StoreActionsTypes.SET_FIRST_TIME_PLAYING });
  };

  const onClickButton = (): (() => void) => {
    return firstTimePlaying ? startFirstGame : closeModal;
  };
  return (
    <section className="bg-general-bg py-6 px-4 z-20 text-dark-gray grid place-items-center text-center border border-dark-gray absolute max-w-96  m-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md ">
      <h2 className="text-xl font-bold">Cómo jugar</h2>
      <div className="flex justify-around w-full">
        <div className="grid place-items-center ">
          <p className="grid gap-2 text-xs font-light">
            <span>Adivina la palabra oculta en cinco intentos.</span>
            <span>Cada intento debe ser una palabra válida de 5 letras.</span>
            <span>
              Después de cada intento el color de las letras cambia para mostrar
              qué tan cerca estás de acertar la palabra.
            </span>
          </p>
        </div>
      </div>
      <div>
        <div className="grid place-items-center gap-2 w-full">
          <b className="text-sm text-left w-full ">Ejemplos</b>
          <WordRow isInModal result={[1, 4, 4, 4, 4] as any} word="gatos" />
        </div>

        <div className="grid place-items-center gap-2 w-full">
          <p className="text-sm my-2 text-left w-full ">
            La letra <b>G</b> está en la palabra y en la posición correcta.
          </p>
          <WordRow isInModal result={[4, 4, 2, 4, 4] as any} word="vocal" />
        </div>

        <div className="grid place-items-center gap-2 w-full">
          <p className="text-sm my-2  text-left w-full ">
            La letra <b>C</b> está en la palabra pero en la posición incorrecta.
          </p>
          <WordRow isInModal result={[4, 4, 4, 4, 0] as any} word="canto" />
        </div>
        <p className="text-sm my-2 text-left w-full">
          La letra <b>O</b> no está en la palabra.
        </p>
        <p className="text-sm my-2 text-left w-full">
          Puede haber letras repetidas. Las pistas son independientes para cada
          letra.
        </p>
      </div>
      <p className="text-xs font-thin my-4 w-full">
        ¡Una palabra nueva cada 5 minutos!
      </p>
      <button
        className="bg-green-box px-12 py-1 text-white-box-letter font-bold rounded-md"
        onClick={onClickButton()}
      >
        ¡JUGAR!
      </button>
    </section>
  );
};

export default Instructions;
