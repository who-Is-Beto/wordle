import { FC, ReactNode, useContext } from "react";
import { StoreContext } from "../../store/StoreProvider";
import { StoreActionsTypes } from "../../enums";
import Switch from "../Switch";

const Header: FC = (): ReactNode => {
  const {
    store: { themeMode },
    dispatch
  } = useContext(StoreContext);

  const handleOpenStats = (): void => {
    dispatch({
      type: StoreActionsTypes.SET_GAME_STATE,
      payload: "paused" as GameStates
    });
  };

  const handleOpenInstructions = (): void => {
    dispatch({ type: StoreActionsTypes.TOGGLE_SEE_INSTRUCTIONS });
  };

  const handleToggleDarkMode = (): void => {
    dispatch({ type: StoreActionsTypes.TOGGLE_DARK_MODE });
  };

  return (
    <header className="bg-light-gray p-2 rounded-lg w-full flex items-center justify-between">
      <button
        onClick={handleOpenInstructions}
        className="bg-mid-gray w-5 h-5 text-sm rounded-full grid place-items-center text-white-box-letter duration-150 active:scale-75"
      >
        ?
      </button>
      <b className="font-semibold text-dark-gray tracking-wider">
        <h1>WORDLE</h1>
      </b>
      <div className="flex items-center gap-2">
        <button
          className="bg-mid-gray px-2 rounded-sm text-xs w-5 h-5 grid place-content-center text-white-box-letter duration active:scale-75"
          onClick={handleOpenStats}
        >
          |||
        </button>
        <Switch checked={themeMode === "dark"} onClick={handleToggleDarkMode} />
      </div>
    </header>
  );
};

export default Header;
