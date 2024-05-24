import { FC, ReactNode } from "react";
import { StoreActionsTypes } from "../../../enums";
import CountDownTimer from "../../CountDownTimer";

type StatsProps = {
  store: Store;
  handleClick: () => void;
  dispatch: React.Dispatch<StoreActions>;
};

const Stats: FC<StatsProps> = ({
  store: {
    victories,
    matchesPlayed,
    gameState,
    answer,
    timeRemaining: { minutes: globalMinutes, seconds: globalSeconds }
  },
  handleClick,
  dispatch
}): ReactNode => {
  const closeModal = (): void => {
    dispatch({
      type: StoreActionsTypes.SET_GAME_STATE,
      payload: "playing" as GameStates
    });
  };

  const onClickButton = (): (() => void) => {
    return gameState === "won" || gameState === "lost"
      ? handleClick
      : closeModal;
  };
  return (
    <section className="bg-general-bg text-dark-gray py-6 z-20 grid place-items-center gap-4 border border-dark-gray absolute w-10/12 m-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md ">
      <h2 className="text-xl font-bold">Estadísticas</h2>
      <div className="flex justify-around w-full">
        <div className="grid place-items-center">
          <b className="text-2xl">{matchesPlayed}</b>
          <span className="text-sm font-normal">Jugadas</span>
        </div>
        <div className="grid place-items-center">
          <b className="text-2xl">{victories}</b>
          <span className="text-sm font-normal">Victorias</span>
        </div>
      </div>
      {gameState === "won" && (
        <p className="font-light">
          La palabra era: <b className="font-bold">{answer}</b>
        </p>
      )}
      <div className="grid place-items-center">
        <p className="text-sm">SIGUENTE PALABRA</p>
        <p>
          <b className="tracking-wide">
            <CountDownTimer minutes={globalMinutes} seconds={globalSeconds} />
          </b>
        </p>
      </div>
      <button
        className="bg-green-box px-12 py-1 text-white-box-letter font-bold rounded-md"
        onClick={onClickButton()}
      >
        Aceptar
      </button>
    </section>
  );
};

export default Stats;
