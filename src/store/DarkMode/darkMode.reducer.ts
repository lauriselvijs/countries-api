import { DarkMode } from "./darkMode.action-type";
import { DarkModeActions } from "./darkMode.action.d";
import { IinitialDarkModeState } from "./darkMode.reducer.d";
import { initialDarkModeState } from "./darkMode.reducer.initial-state";

const darkModeReducer = (
  state = initialDarkModeState,
  action: DarkModeActions
): IinitialDarkModeState => {
  switch (action.type) {
    case DarkMode.SET_DARK_MODE:
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
};

export default darkModeReducer;
