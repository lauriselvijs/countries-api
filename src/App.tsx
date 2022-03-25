import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Country from "./route/Country";
import Navbar from "./component/Navbar";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Country />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
