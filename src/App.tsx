import "./styles/global.css";
import { Musica } from "./components/Musica/Musica";
import { Carrossel } from "./components/Carrosel/Carrosel";
import { Contador } from "./components/Contador/Contador";

function App() {
  return (
    <>
      <main>
        <Musica />
        <Carrossel />
        <Contador />
      </main>
    </>
  );
}

export default App;
