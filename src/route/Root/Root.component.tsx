import React from "react";
import { Outlet } from "react-router-dom";
import DarkModeBtn from "../../component/DarkModeBtn";
import HeaderWrapper from "../../component/HeaderWrapper";
import Title from "../../component/Title";
import "./Root.style.scss";

const Root = () => {
  return (
    <>
      <HeaderWrapper>
        <Title />
        <DarkModeBtn />
      </HeaderWrapper>
      <Outlet />
    </>
  );
};

export default Root;
