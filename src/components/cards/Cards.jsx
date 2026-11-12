import "./Cards.css";

function Card({ titulo, children }) {  
  return (
    <div className="card">
      <h3>{titulo}</h3>
      {children}
    </div>
  );
}

function formatarPercentual(resultado) {
  const percentual = Number(resultado);

  if (percentual < 0.01 && percentual > 0) {
    return percentual.toFixed(4).replace(".", ",");
  }

  return percentual.toFixed(2).replace(".", ",");
}

function formatarNumero(valor) { 
    return Number(valor).toLocaleString("pt-BR");
  }

function Cards({ resultado, tipoNome }) {
  if (!resultado) return null;
  return (
    <section className={`cards ${tipoNome === "sobrenome" ? "sobrenome" : ""}`}>      

        <Card titulo="POPULAÇÃO">
          <strong>{formatarNumero(resultado.frequencia)}</strong>
          <span>pessoas</span>
        </Card>

        <Card titulo="PERCENTUAL">
          <strong>
            {formatarPercentual(resultado.percent)}%
          </strong>
          <span>da população</span>
        </Card>

        <Card titulo="POPULARIDADE">
          <strong>{formatarNumero(resultado.rank)}º</strong>
          {tipoNome === "nome" && <span>nome mais comum</span>}
          {tipoNome === "sobrenome" && <span>sobrenome mais comum</span>}
        </Card>

        {tipoNome === "nome" && ( 
            <Card titulo="IDADE MEDIANA">
                <strong>
                    {resultado.idade != null
                    ? Number(resultado.idade).toFixed(0)
                    : "N/A"}
                </strong>
                <span>
                    {resultado.idade != null ? "anos" : "não disponível"}
                </span>
            </Card>
        )}     
    </section>
  );
}
export default Cards;