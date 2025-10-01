import axios from "axios";
import { httpClient } from "..";
import { LoginPayload } from "@/shared/interfaces/auth.interface";

const ENDPOINT = "/api/auth/login";

export const LOGIN = "LOGIN";

export const login = async (payload: LoginPayload) => {
  try {
    const { data } = await httpClient.post(`${ENDPOINT}`, payload);
    return data;
  } catch (error) {
    if (!axios.isAxiosError(error)) throw error;
    throw error.response?.data;
  }
};
