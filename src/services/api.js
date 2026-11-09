import axios from "axios";

const api = axios.create({
  baseURL: "https://servicodados.ibge.gov.br/api/v3/nomes/2022/nome",
});

export async function buscarNomes(nome, tipoNome) {
  try {
    const response = await api.get(`/${encodeURIComponent(nome)}`, {
      params: {
        tipo: tipoNome,
        localidade: 0,  
      },
    });

    return response.data;

  } catch (error) {
    console.error("Erro ao buscar nome:", error);
    throw error;
  }
}

export default api;