import React from "react";
import "./ClearSelect.style.scss";
import { BtnName } from "../../constant/BtnName";

const { CLEAR_SELECT } = BtnName;

const ClearSelect = () => {
  const onClearSelectClickBtn = () => {
    console.log("clear");
  };

  return (
    <div className="clear-select" onClick={onClearSelectClickBtn}>
      {CLEAR_SELECT}
    </div>
  );
};

export default ClearSelect;
