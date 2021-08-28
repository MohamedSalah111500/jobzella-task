import "./App.scss";
import { BrowserRouter, Route, Link } from "react-router-dom";

import HomePage from "./Pages/home/home";
import Routes from "./Routes";

import Header from "./components/Header/HeaderComp";
import Footer from "./components/Footer/FooterComp";

function App() {
  
  return (
    <BrowserRouter>
      <div className="home-body">
        <Header />
        <Routes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
