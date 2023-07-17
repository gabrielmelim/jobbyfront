import axios from "axios";
import { TPostExperiencia } from "../types";

export function ExperienciaService() {
  const url = "https://jobbyapi-production.up.railway.app";

  async function getExperiencias() {
    try {
      const response = await axios.get(`${url}/experiencia`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async function getExperienciaById(id: number) {
    try {
      const response = await axios.get(`${url}/experiencia/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async function postExperiencia(body: TPostExperiencia) {
    try {
      await axios.post(`${url}/experiencia`, body);
    } catch (error) {
      console.error(error);
    }
  }

  async function putExperiencia(id: number, body: Partial<TPostExperiencia>) {
    try {
      await axios.put(`${url}/experiencia/${id}`, body);
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteExperiencia(id: number) {
    try {
      await axios.delete(`${url}/experiencia/${id}`);
    } catch (error) {
      console.error(error);
    }
  }

  return {
    getExperiencias,
    getExperienciaById,
    postExperiencia,
    putExperiencia,
    deleteExperiencia,
  };
}
