import { useState } from "react";
import { buscarNomes } from "../services/api.js";
import "./NameSearcher.css";
import Header from "../components/header/Header.jsx";
import Forms from "../components/forms/Forms.jsx";
import Cards from "../components/cards/Cards.jsx";
import Footer from "../components/footer/Footer.jsx";

function NameSearcher() {
  const [nome, setNome] = useState("");
  const [tipoNome, setTipoNome] = useState("nome");
  const [tipoPesquisado, setTipoPesquisado] = useState(null);
  const [resultado, setResultado] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const data = await buscarNomes(nome, tipoNome);      

      const dados = Array.isArray(data) ? data[0] : data;
      setResultado(dados);
      setTipoPesquisado(tipoNome);
    } catch (error) {
      console.error(error);
      setResultado(null);
      setTipoPesquisado(null);
    }
  }

  return (
    <div className="container">
      <Header />

      <Forms
        handleSubmit={handleSubmit}
        nome={nome}
        tipoNome={tipoNome}
        setNome={setNome}
        setTipoNome={setTipoNome}
      />

      <Cards resultado={resultado} tipoNome={tipoPesquisado} />
      
      <Footer />
    </div>
  );
}

export default NameSearcher;
