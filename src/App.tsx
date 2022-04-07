import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Country from "./route/Country";
import Root from "./route/Root";
import CountryInfo from "./route/CountryInfo";
import "./App.scss";
import { useSelector } from "react-redux";
import { State } from "./store/reducer";
import { CountryRoute } from "./constant/CountryRoute";
import { RootRoute } from "./constant/RootRoute";
import NoMatch from "./route/NoMatch";

const App = () => {
  const darkMode = useSelector((state: State) => state.darkMode.darkMode);

  const { COUNTRY_CCA3 } = CountryRoute.Country;
  const { ROOT } = RootRoute.Root;

  return (
    <div className={darkMode ? "app-dark-mode" : "app"}>
      <Router>
        <Routes>
          <Route path={ROOT} element={<Root />}>
            <Route index element={<CountryInfo />} />
            <Route path={COUNTRY_CCA3} element={<Country />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
