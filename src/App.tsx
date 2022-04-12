import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Root from "./route/Root";
import "./App.scss";
import { useSelector } from "react-redux";
import { State } from "./store/reducer";
import { CountryRoute } from "./constant/CountryRoute";
import { RootRoute } from "./constant/RootRoute";
import { NoMatchRoute } from "./constant/NoMatchRoute";
const { NO_MATCH_ROUTE } = NoMatchRoute;
const { COUNTRY_CCA3 } = CountryRoute.Country;
const { ROOT } = RootRoute.Root;
import Loader from "./component/Loader";

const App = () => {
  const darkMode = useSelector((state: State) => state.darkMode.darkMode);

  const Country = lazy(() => import("./route/Country"));
  const NoMatch = lazy(() => import("./route/NoMatch"));
  const CountriesInfo = lazy(() => import("./route/CountriesInfo"));

  return (
    <div className={darkMode ? "app-dark-mode" : "app"}>
      <Router>
        <Routes>
          <Route path={ROOT} element={<Root />}>
            <Route
              index
              element={
                <Suspense fallback={<Loader />}>
                  <CountriesInfo />
                </Suspense>
              }
            />
            <Route
              path={COUNTRY_CCA3}
              element={
                <Suspense fallback={<Loader />}>
                  <Country />
                </Suspense>
              }
            />
          </Route>

          <Route
            path={NO_MATCH_ROUTE}
            element={
              <Suspense fallback={<Loader />}>
                <NoMatch />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
