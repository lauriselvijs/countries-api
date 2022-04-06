import React from "react";
import "./ClearSelect.style.scss";
import { BtnName } from "../../constant/BtnName";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../store/reducer";
import { countryActions } from "../../store/action";
import { bindActionCreators } from "redux";

const { CLEAR_SELECT } = BtnName;

const ClearSelect = () => {
  const darkMode = useSelector((state: State) => state.darkMode.darkMode);

  const dispatch = useDispatch();

  const { getCountryData } = bindActionCreators(countryActions, dispatch);

  const onClearSelectClickBtn = () => {
    getCountryData();
  };

  return (
    <div
      className={darkMode ? "clear-select-dark-mode" : "clear-select"}
      onClick={onClearSelectClickBtn}
    >
      {CLEAR_SELECT}
    </div>
  );
};

export default ClearSelect;
