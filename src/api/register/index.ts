import axios from "axios";
import { httpClient } from "..";
import { RegisterPayload } from "@/shared/interfaces/auth.interface";

const ENDPOINT = "/api/auth/register";

export const REGISTER = "REGISTER";

export const register = async (payload: RegisterPayload) => {
  try {
    const { data } = await httpClient.post(`${ENDPOINT}`, payload);
    return data;
  } catch (error) {
    if (!axios.isAxiosError(error)) throw error;
    throw error.response?.data;
  }
};
