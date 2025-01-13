import { BrowserRouter } from "react-router-dom";

import AppToolbar from "./components/AppToolbar";
import Footer from "./components/Footer";

import "./App.css";
import MainRoute from "./routes/MainRoute";
import LightTheme from "./hoc/Theme/LightTheme/LightTheme";

function App() {
  return (
    <BrowserRouter>
      <LightTheme>
        <AppToolbar />
        <MainRoute />
        <Footer />
      </LightTheme>
    </BrowserRouter>
  );
}

export default App;
