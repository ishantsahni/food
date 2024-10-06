import "./App.css";
import DesignPage from "./components/DesignPage";
import MainPage from "./components/MainPage";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/design" element={<DesignPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
