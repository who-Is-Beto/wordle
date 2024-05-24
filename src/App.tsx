import { FC, ReactNode, useContext, useEffect, useState } from "react";
import Borad from "./components/Borard";
import Keyboard from "./components/Keyboard";
import useGuess from "./hooks/useGuess";
import Modal from "./components/Modal";
import { StoreContext } from "./store/StoreProvider";
import Stats from "./components/Modal/views/Stats";
import { StoreActionsTypes } from "./enums";
import Header from "./components/Header";
import Instructions from "./components/Modal/views/Instructions";

const App: FC = (): ReactNode => {
  const { rows, addGuessLetter } = useGuess();
  const { store, dispatch } = useContext(StoreContext);
  const {
    timeRemaining: { minutes: globalMinutes, seconds: globalSeconds }
  } = store;
  const [seconds, setSeconds] = useState<number>(globalSeconds);
  const [minutes, setMinutes] = useState<number>(globalMinutes);
  const lastThemeMode = store.themeMode === "dark" ? "light" : "dark";
  const startGame = (): void => {
    dispatch({ type: StoreActionsTypes.NEW_GAME });
  };

  useEffect(() => {
    const timer =
      seconds > 0 && setInterval(() => setSeconds(seconds - 1), 1000);
    return () => clearInterval(timer as any);
  }, [seconds]);

  useEffect(() => {
    dispatch({
      type: StoreActionsTypes.SET_TIME_REMAINING,
      payload: { minutes, seconds }
    });

    if (seconds === 0) {
      setSeconds(60);
      setMinutes(minutes - 1);

      if (minutes === 0) {
        dispatch({ type: StoreActionsTypes.NEW_GAME });
        setMinutes(5);
        return;
      }
    }
  }, [minutes, seconds]);

  useEffect(() => {
    if (document.body.classList.contains(lastThemeMode)) {
      document.body.classList.remove(lastThemeMode);
    }
    document.body.classList.add(store.themeMode);
  }, [store.themeMode]);

  return (
    <main
      className={`duration-500 w-full h-screen flex flex-col justify-between items-center bg-general-bg py-6 md:px-[25%] md:mx-auto`}
    >
      <Header />
      <Borad rows={rows} />
      <Keyboard
        onClick={(key: string) => {
          addGuessLetter(key);
        }}
        store={store}
      />
      <Modal>
        {store.gameState !== "playing" && (
          <>
            <Stats store={store} dispatch={dispatch} handleClick={startGame} />
            <div className="absolute left-0 top-0 w-screen h-screen z-10 bg-general-bg opacity-80"></div>
          </>
        )}
        {(store.firstTimePlaying || store.seeInstructions) && (
          <>
            <Instructions store={store} dispatch={dispatch} />
            <div className="absolute left-0 top-0 w-screen h-screen z-10 bg-general-bg opacity-80"></div>
          </>
        )}
      </Modal>
    </main>
  );
};

export default App;
