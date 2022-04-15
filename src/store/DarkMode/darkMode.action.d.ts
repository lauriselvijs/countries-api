import { DarkMode } from "./darkMode.action-type";

interface ISetDarkMode {
  type: DarkMode.SET_DARK_MODE;
}

export type DarkModeActions = ISetDarkMode;
