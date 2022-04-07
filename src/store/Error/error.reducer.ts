import { Error } from "./error.action-type";
import { ErrorActions } from "./error.action";
import { IinitialErrorState } from "./error.initial-state.d";
import { initialErrorState } from "./error.initial-state";

const darkModeReducer = (
  state = initialErrorState,
  action: ErrorActions
): IinitialErrorState => {
  switch (action.type) {
    case Error.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case Error.CLEAR_ERROR:
      return {
        ...state,
        error: {
          status: 0,
          message: "",
        },
      };
    default:
      return state;
  }
};

export default darkModeReducer;
