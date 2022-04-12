import React from "react";
import "./Loader.style.scss";
import PropTypes from "prop-types";

const Loader = ({ infoMsg }: { infoMsg?: string }) => {
  return (
    <div className="loader-container">
      <div className="loader">{infoMsg}</div>
    </div>
  );
};

Loader.propTypes = {
  infoMsg: PropTypes.string,
};

Loader.defaultPropTypes = {
  infoMsg: "",
};

export default Loader;
