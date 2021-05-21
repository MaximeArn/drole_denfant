import React from "react";
import { useDispatch } from "react-redux";
import "./Header.scss";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header>
        <p>drole d'enfant</p>
        <div className="auth-buttons">
          <button
            onClick={() => {
              dispatch({ type: "loginModal" });
            }}
          >
            connexion
          </button>
          <button
            onClick={() => {
              dispatch({ type: "registerModal" });
            }}
          >
            s'enregistrer
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
