import axios from "axios";
import { TPostCidade } from "../types";

export function CidadeService() {
  const url = "https://jobbyapi-production.up.railway.app";

  async function getCidades() {
    try {
      const response = await axios.get(`${url}/cidade`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async function getCidadeById(id: number) {
    try {
      const response = await axios.get(`${url}/cidade/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async function postCidade(body: TPostCidade) {
    try {
      await axios.post(`${url}/cidade`, body);
    } catch (error) {
      console.error(error);
    }
  }

  async function putCidade(id: number, body: Partial<TPostCidade>) {
    try {
      await axios.put(`${url}/cidade/${id}`, body);
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteCidade(id: number) {
    try {
      await axios.delete(`${url}/cidade/${id}`);
    } catch (error) {
      console.error(error);
    }
  }

  return {
    getCidades,
    getCidadeById,
    postCidade,
    putCidade,
    deleteCidade,
  };
}
