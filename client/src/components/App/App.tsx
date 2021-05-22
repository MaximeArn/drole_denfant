import React from "react";
import Header from "../../containers/Header";
import Articles from "../Articles/Articles";
import Footer from "../Footer/Footer";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
