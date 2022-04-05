import axios from "axios";
import { Country } from "./country.action.type";
import { CountryActions } from "./country.action.d";
import { Dispatch } from "react";
import {
  FIND_COUNTRY_BY_COUNTRY_CODE_URL,
  GET_ALL_COUNTRY_DATA_URL,
} from "../../constant/CountryAPI/CountryAPI.const";
import {
  IBorderCountries,
  ICountryCard,
  ISingleCountry,
} from "../../type-definition/Country";
import { IError } from "../../type-definition/Error";

export const setLoading =
  () => async (dispatch: Dispatch<CountryActions | any>) => {
    dispatch({ type: Country.SET_LOADING });
  };

export const setError =
  (error: any[]) => async (dispatch: Dispatch<CountryActions | any>) => {
    dispatch({ type: Country.SET_ERROR, payload: error });
  };

export const clearError =
  () => async (dispatch: Dispatch<CountryActions | any>) => {
    dispatch({ type: Country.CLEAR_ERROR });
  };

export const getCountryData =
  () => async (dispatch: Dispatch<CountryActions | any>) => {
    const onSuccess = (data: ISingleCountry[]) => {
      dispatch({ type: Country.GET_COUNTRY_DATA, payload: data });
      return data;
    };

    const onError = (error: IError) => {
      dispatch({ type: Country.SET_ERROR });
      return error;
    };

    try {
      dispatch(setLoading());
      const { data } = await axios.get(GET_ALL_COUNTRY_DATA_URL);
      return onSuccess(data);
    } catch (error: any) {
      return onError(error.response.data);
    }
  };

export const getSingleCountryData =
  (cca3: string | undefined) =>
  async (dispatch: Dispatch<CountryActions | any>) => {
    const onSuccess = (data: ICountryCard["country"]) => {
      dispatch({ type: Country.GET_SINGLE_COUNTRY_DATA, payload: data });
      return data;
    };

    const onError = (error: IError) => {
      dispatch({ type: Country.SET_ERROR });
      return error;
    };

    try {
      dispatch(setLoading());
      const { data } = await axios.get(
        `${FIND_COUNTRY_BY_COUNTRY_CODE_URL}${cca3}`
      );
      return onSuccess(data);
    } catch (error: any) {
      return onError(error.response.data);
    }
  };

export const getBorderCountryNames =
  (borderCountries: string[] | undefined) =>
  async (dispatch: Dispatch<CountryActions | any>) => {
    const onSuccess = (data: IBorderCountries["borderCountries"]) => {
      dispatch({ type: Country.GET_BORDER_COUNTRY_NAMES, payload: data });
      return data;
    };

    const onError = (error: IError) => {
      dispatch({ type: Country.SET_ERROR, payload: error });
      return error;
    };

    try {
      dispatch(setLoading());
      let borderCountriesNames: any = [];
      borderCountries?.forEach(async (countryCode: string, index: number) => {
        const {
          data: { name },
        }: any = await axios.get(
          `${FIND_COUNTRY_BY_COUNTRY_CODE_URL}${countryCode}`
        );

        borderCountriesNames = [...borderCountriesNames, { name, countryCode }];
        borderCountries.length === index + 1 && onSuccess(borderCountriesNames);
      });

      return onSuccess(borderCountriesNames);
    } catch (error: any) {
      return onError(error);
    }
  };

export const clearSingleCountryState =
  () => async (dispatch: Dispatch<CountryActions | any>) => {
    dispatch({ type: Country.CLEAR_SINGLE_COUNTRY_STATE });
  };

export const clearCountriesState =
  () => async (dispatch: Dispatch<CountryActions | any>) => {
    dispatch({ type: Country.CLEAR_COUNTRIES_STATE });
  };

export const clearBorderCountriesState =
  () => async (dispatch: Dispatch<CountryActions | any>) => {
    dispatch({ type: Country.CLEAR_BORDER_COUNTRIES_STATE });
  };
