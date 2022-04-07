import { combineReducers } from "redux";
import darkModeReducer from "./DarkMode/darkMode.reducer";
import countryReducer from "./Country/country.reducer";
import errorReducer from "./Error/error.reducer";

const reducers = combineReducers({
  country: countryReducer,
  darkMode: darkModeReducer,
  error: errorReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
