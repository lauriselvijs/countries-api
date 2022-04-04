import { combineReducers } from "redux";
import darkModeReducer from "./DarkMode/darkMode.reducer";
import countryReducer from "./Country/country.reducer";

const reducers = combineReducers({
  country: countryReducer,
  darkMode: darkModeReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
