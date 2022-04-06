import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Country from "./route/Country";
import HeaderWrapper from "./component/HeaderWrapper";
import DarkModeBtn from "./component/DarkModeBtn";
import Title from "./component/Title";
import Root from "./route/Root";
import "./App.scss";
import { useSelector } from "react-redux";
import { State } from "./store/reducer";

const App = () => {
  const darkMode = useSelector((state: State) => state.darkMode.darkMode);

  return (
    <div className={darkMode ? "app-dark-mode" : "app"}>
      <Router>
        <HeaderWrapper>
          <Title />
          <DarkModeBtn />
        </HeaderWrapper>
        <Routes>
          <Route path={"/"} element={<Root />}></Route>
          <Route path={"/country/:cca3"} element={<Country />}></Route>
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
