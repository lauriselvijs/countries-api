import axios from "axios";
import { Country } from "./country.action.type";
import { CountryActions } from "./country.action.d";
import { Dispatch } from "react";
import {
  FIND_COUNTRY_BY_COUNTRY_CODE_URL,
  GET_ALL_COUNTRY_DATA_URL,
} from "../../constant/CountryAPI/CountryAPI.const";
import {
  BorderCountryNames,
  ICountryCard,
} from "../../type-definition/Country";

export const setLoading =
  (loading: boolean) => async (dispatch: Dispatch<CountryActions | any>) => {
    dispatch({ type: Country.SET_LOADING, payload: loading });
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
  (error: any[]) => async (dispatch: Dispatch<CountryActions | any>) => {
    dispatch({ type: Country.SET_ERROR, payload: error });

    const onSuccess = (data: ICountryCard[]) => {
      dispatch({ type: Country.GET_COUNTRY_DATA, payload: data });
      return data;
    };

    const onError = (error: any) => {
      dispatch({ type: Country.SET_ERROR });
      return error;
    };

    try {
      const { data } = await axios.get(GET_ALL_COUNTRY_DATA_URL);
      onSuccess(data);
    } catch (error: any) {
      onError(error);
    }
  };

export const getSingleCountryData =
  (cca3: string) => async (dispatch: Dispatch<CountryActions | any>) => {
    const onSuccess = (data: ICountryCard) => {
      dispatch({ type: Country.GET_SINGLE_COUNTRY_DATA, payload: data });
      return data;
    };

    const onError = (error: any) => {
      dispatch({ type: Country.SET_ERROR });
      return error;
    };

    try {
      const { data } = await axios.get(
        `${FIND_COUNTRY_BY_COUNTRY_CODE_URL}${cca3}`
      );
      onSuccess(data);
    } catch (error: any) {
      onError(error);
    }
  };

export const getBorderCountryNames =
  (borderCountries: string[]) => async (dispatch: Dispatch<CountryActions>) => {
    const onSuccess = (data: BorderCountryNames["borderCountries"]) => {
      dispatch({ type: Country.GET_BORDER_COUNTRY_NAMES, payload: data });
      return data;
    };

    const onError = (error: any) => {
      dispatch({ type: Country.SET_ERROR, payload: error });
      return error;
    };

    try {
      let borderCountriesNames: BorderCountryNames["borderCountries"] = [];

      borderCountries?.forEach(async (countryCode: string) => {
        const {
          data: { name },
        }: any = await axios.get(
          `${FIND_COUNTRY_BY_COUNTRY_CODE_URL}${countryCode}`
        );

        borderCountriesNames = [...borderCountriesNames, { name, countryCode }];
      });

      onSuccess(borderCountriesNames);
    } catch (error: any) {
      onError(error);
    }
  };

export const clearState =
  () => async (dispatch: Dispatch<CountryActions | any>) => {
    dispatch({ type: Country.CLEAR_STATE });
  };
