import "./Forms.css";

function Forms({ handleSubmit, nome, tipoNome, setNome, setTipoNome }) {
  return (
    <section className="forms">
    <form  onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite um nome ou sobrenome"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
        required
      />

      <select
        value={tipoNome}
        onChange={(event) => setTipoNome(event.target.value)}
      >
        <option value="nome">Primeiro nome</option>
        <option value="sobrenome">Sobrenome</option>
      </select>

      <button type="submit">Pesquisar</button>
    </form>
    </section>
  );
}

export default Forms;
