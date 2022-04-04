import { DarkMode } from "./darkMode.action-type";
import { DarkModeActions } from "./darkMode.action.d";
import { Dispatch } from "redux";

export const setDarkMode =
  () => async (dispatch: Dispatch<DarkModeActions | any>) => {
    dispatch({ type: DarkMode.SET_DARK_MODE });
  };
