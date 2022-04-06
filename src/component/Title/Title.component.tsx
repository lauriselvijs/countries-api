import React from "react";
import "./Title.style.scss";
import { Hero } from "../../constant/Hero";
import { useSelector } from "react-redux";
import { State } from "../../store/reducer";
import { Link } from "react-router-dom";

const { TITLE } = Hero;

const Title = () => {
  const darkMode = useSelector((state: State) => state.darkMode.darkMode);

  return (
    <Link to={"/"}>
      <section className={darkMode ? "title-dark-mode" : "title"}>
        {TITLE}
      </section>
    </Link>
  );
};

export default Title;
