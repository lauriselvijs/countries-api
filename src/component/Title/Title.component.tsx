import React from "react";
import "./Title.style.scss";
import { Hero } from "../../constant/Hero";

const { TITLE } = Hero;

const Title = () => {
  return <section className="title">{TITLE}</section>;
};

export default Title;
