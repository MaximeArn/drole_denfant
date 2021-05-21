import React from "react";
import "./Header.scss";

function App({ openLoginModal }: any) {
  return (
    <header>
      <p>drole d'enfant</p>
      <div className="auth-buttons">
        <button onClick={() => openLoginModal()}>connexion</button>
        <button>s'enregistrer</button>
      </div>
    </header>
  );
}

export default App;
