import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [cand, setCand] = useState();

  const retrieveData = async () => {
    const result = await fetch(
      "https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json"
    );

    const candRes = await result.json();
    console.log("rodei");
    setCand(candRes.cand);
  };

  const lula = cand ? cand[1] : "";
  const bolso = cand ? cand[0] : "";

  useEffect(() => {
    setInterval(() => {
      retrieveData();
    }, 699);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>LULA: "{lula?.pvap}%"</p>
        <p>BOLSO: "{bolso?.pvap}%"</p>
      </header>
    </div>
  );
}

export default App;
