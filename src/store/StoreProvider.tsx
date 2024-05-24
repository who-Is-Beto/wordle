import {
  Dispatch,
  FC,
  ReactNode,
  createContext,
  useEffect,
  useReducer
} from "react";
import reducers from "./StoreReducer";
import { getRandomWord } from "../utils/word-utils";

const APP_STATE_NAME = "wordle";

type AppProviderProps = {
  children: ReactNode;
};

const initialState: Store = JSON.parse(localStorage.getItem(APP_STATE_NAME)!)
  ? JSON.parse(localStorage.getItem(APP_STATE_NAME)!)
  : {
      firstTimePlaying: true,
      answer: getRandomWord().toLocaleUpperCase(),
      guess: "",
      matchesPlayed: 0,
      victories: 0,
      rows: [],
      timeRemaining: { minutes: 5, seconds: 0 },
      seeInstructions: false,
      keyboardLetterState: {},
      gameState: "playing",
      themeMode: "dark"
    };

export const StoreContext = createContext<{
  store: Store;
  dispatch: Dispatch<StoreActions>;
}>({ store: initialState, dispatch: () => null });

const AppProvider: FC<AppProviderProps> = ({ children }): ReactNode => {
  const [store, dispatch] = useReducer(reducers, initialState);

  useEffect(() => {
    localStorage.setItem(APP_STATE_NAME, JSON.stringify(store));
  }, [store]);

  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export default AppProvider;
