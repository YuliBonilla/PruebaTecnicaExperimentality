import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./router/Main";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { useMediaQuery } from "react-responsive";

function App() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <Router>
      <Header />
      {!isTabletOrMobile && <NavBar />}
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
