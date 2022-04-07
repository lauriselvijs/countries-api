import { IError } from "../../type-definition/Error";

interface ISetError {
  type: Country.SET_ERROR;
  payload: IError;
}

interface IClearError {
  type: Country.CLEAR_ERROR;
  payload: IError;
}

export type ErrorActions = ISetError | IClearError;
