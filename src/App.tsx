import "./styles/global.css";
import { Musica } from "./components/Musica/Musica";
import { Carrossel } from "./components/Carrosel/Carrosel";
import { Contador } from "./components/Contador/Contador";
import React, { useState } from "react";

function App() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <>
      {/* Botão */}
      {!isClicked && (
        <button className="button" onClick={handleClick}>
          Clique aqui ❤️
        </button>
      )}

      {/* Condicional para mostrar a aplicação */}
      {isClicked && (
        <main>
          <Musica />
          <Carrossel />
          <Contador />
        </main>
      )}
    </>
  );
}

export default App;
