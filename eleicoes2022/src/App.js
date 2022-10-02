import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [cand, setCand] = useState();
  const [apur, setApur] = useState();

  const retrieveData = async () => {
    const result = await fetch(
      "https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json"
    );

    const candRes = await result.json();
    setCand(candRes.cand);
    setApur(candRes.pst);
  };

  const lula = cand ? cand[1] : "";
  const bolso = cand ? cand[0] : "";

  const formatApur = apur?.replace(",", ".");

  useEffect(() => {
    setInterval(() => {
      retrieveData();
    }, 699);
  }, []);

  return (
    <div className="App">
      <div
        style={{
          backgroundColor: "green",
          position: "absolute",
          top: 0,
          zIndex: -1,
          width: `${formatApur}%`,
          height: 50,
        }}
      ></div>
      <div>
        <p>APURADOS: {apur}%</p>
      </div>

      <header className="App-header">
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <div>
              <p style={{ fontSize: 50, color: "black", width: 400 }}>LULA: </p>
              <p style={{ fontSize: 50, color: "red" }}>{lula?.pvap}%</p>
            </div>
            <img
              src="https://static.poder360.com.br/2022/04/Lula-Alckmin-PSB-Congresso-PT-Campanha-Eleicoes2022-1-scaled.jpg"
              style={{
                width: 300,
                height: 300,
                borderRadius: 150,
                borderWidth: 1,
              }}
            ></img>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div>
              <p style={{ fontSize: 50, color: "black", width: 400 }}>
                B
                <text style={{ fontSize: 50, color: "#cfcb0c", width: 400 }}>
                  O
                </text>
                LSO:
              </p>
              <p style={{ fontSize: 50, color: "green" }}>{bolso?.pvap}%</p>
            </div>
            <img
              src="https://media.gettyimages.com/photos/president-of-brazil-jair-bolsonaro-adjusts-his-protective-mask-during-picture-id1207623646?s=612x612"
              style={{
                width: 300,
                height: 300,
                borderRadius: 150,
                borderWidth: 1,
              }}
            ></img>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
