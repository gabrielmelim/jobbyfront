import axios from "axios";
import { TPostCadastro } from "../types";

export function CadastroService() {
  const url = "https://jobbyapi-production.up.railway.app";

  async function getCadastros() {
    try {
      const response = await axios.get(`${url}/cadastro`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async function getCadastroById(id: number) {
    try {
      const response = await axios.get(`${url}/cadastro/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async function postCadastro(body: TPostCadastro) {
    try {
      await axios.post(`${url}/cadastro`, body);
    } catch (error) {
      console.error(error);
    }
  }

  async function putCadastro(id: number, body: Partial<TPostCadastro>) {
    try {
      await axios.put(`${url}/cadastro/${id}`, body);
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteCadastro(id: number) {
    try {
      await axios.delete(`${url}/cadastro/${id}`);
    } catch (error) {
      console.error(error);
    }
  }

  return {
    getCadastros,
    getCadastroById,
    postCadastro,
    putCadastro,
    deleteCadastro,
  };
}
