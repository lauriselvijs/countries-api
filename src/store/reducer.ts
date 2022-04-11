import { combineReducers } from "redux";
import darkModeReducer from "./DarkMode/darkMode.reducer";
import countryReducer from "./Country/country.reducer";
import errorReducer from "./Error/error.reducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const darkModeReducerConfig = {
  key: "dark-mode",
  storage: storage,
};

const reducers = combineReducers({
  country: countryReducer,
  darkMode: persistReducer(darkModeReducerConfig, darkModeReducer),
  error: errorReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
