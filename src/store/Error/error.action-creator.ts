import { Error } from "./error.action-type";
import { ErrorActions } from "./error.action";
import { Dispatch } from "redux";
import { IError } from "../../type-definition/Error";

export const setError =
  (error: IError) => async (dispatch: Dispatch<ErrorActions | any>) => {
    dispatch({ type: Error.SET_ERROR, payload: error });
  };

export const clearError =
  () => async (dispatch: Dispatch<ErrorActions | any>) => {
    dispatch({ type: Error.CLEAR_ERROR });
  };
