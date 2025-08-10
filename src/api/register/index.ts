import axios from "axios";
import { httpClient } from "..";
import { RegisterPayload } from "@/shared/interfaces/user.interface";

const ENDPOINT = "/api/auth/register";

export const REGISTER_USER = "REGISTER_USER";

export const registerUser = async (payload: RegisterPayload) => {
  try {
    const { data } = await httpClient.post(`${ENDPOINT}`, payload);
    return data;
  } catch (error) {
    if (!axios.isAxiosError(error)) throw error;
    throw error.response?.data;
  }
};
