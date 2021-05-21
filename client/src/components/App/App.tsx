import React from "react";
// import { useDispatch } from "react-redux";
import "./App.scss";

function App() {
  // const dispatch = useDispatch();
  return (
    <div className="App">
      <header>
        <p>drole d'enfant</p>
        <div className="auth-buttons">
          <button
          // onClick={() => {
          //   dispatch({ type: "login" });
          // }}
          >
            connexion
          </button>
          <button
          // onClick={() => {
          //     dispatch({ type: "login" });
          //   }}
          >
            s'enregistrer
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
