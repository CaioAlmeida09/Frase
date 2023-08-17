import { useState } from "react";

import ImageLogo from "./assets/logo.png";
import "./App.css";

function App() {
  const [TesteFrase, setTesteFrase] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0);

  function ChangeCategoria(index: number) {
    setCategoriaSelecionada(index);
  }
  function GerarFrase() {
    const NumberAleatorio = Math.floor(
      Math.random() * AllFrases[categoriaSelecionada].frases.length
    );
    setTesteFrase(
      `"${AllFrases[categoriaSelecionada].frases[NumberAleatorio]}"`
    );
  }
  const AllFrases = [
    {
      id: 0,
      tipo: "motivação",
      frases: ["teste motivação 0", "teste motivação 2", "teste motivação 3"],
    },
    {
      id: 1,
      tipo: "Bom dia",
      frases: ["teste Bom dia 0", "teste Bom dia 2", "teste Bom dia 3"],
    },
    {
      id: 2,
      tipo: "Boa Noite",
      frases: ["teste boa noite 0", "teste boa noite 2", "teste boa noite 3"],
    },
  ];
  return (
    <>
      <div className="container">
        <img alt="Logo-Frases" src={ImageLogo} className="image" />
        <h1> Categorias</h1>
        <section className="categorias">
          {AllFrases.map((item, index) => (
            <button
              key={item.id}
              className="button-categoria"
              style={{
                background:
                  item.tipo === AllFrases[categoriaSelecionada].tipo
                    ? "#90ee80"
                    : "",
                borderColor: " #1fa4db",
              }}
              onClick={() => ChangeCategoria(index)}
            >
              {item.tipo}
            </button>
          ))}
        </section>
        <button className="gerar-frases" onClick={GerarFrase}>
          {" "}
          Gerar frases{" "}
        </button>
        {TesteFrase !== "" && <p className="frases">{TesteFrase}</p>}
      </div>
    </>
  );
}

export default App;
