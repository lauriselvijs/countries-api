import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Country from "./route/Country";
import HeaderWrapper from "./component/HeaderWrapper";
import DarkModeBtn from "./component/DarkModeBtn";
import Title from "./component/Title";
import Root from "./route/Root";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Router>
        <HeaderWrapper>
          <Title />
          <DarkModeBtn />
        </HeaderWrapper>
        <Routes>
          <Route path={"/"} element={<Root />}></Route>
          <Route path={"/country"} element={<Country />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
