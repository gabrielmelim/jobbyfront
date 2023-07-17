import axios from "axios";
import { TPostProfissao } from "../types";

export function ProfissaoService() {
  const url = "https://jobbyapi-production.up.railway.app";

  async function getProfissoes() {
    try {
      const response = await axios.get(`${url}/profissao`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async function postProfissao(body: TPostProfissao) {
    try {
      await axios.post(`${url}/profissao`, body);
    } catch (error) {
      console.error(error);
    }
  }

  async function getProfissaoById(id: number) {
    try {
      const response = await axios.get(`${url}/profissao/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteProfissao(id: number) {
    try {
      await axios.delete(`${url}/profissao/${id}`);
    } catch (error) {
      console.error(error);
    }
  }

  return {
    getProfissoes,
    postProfissao,
    getProfissaoById,
    deleteProfissao,
  };
}
