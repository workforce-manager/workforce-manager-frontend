import axios from "axios";
import { httpClient } from "..";
import { Employee } from "@/shared/interfaces/employee.interface";

const ENDPOINT = "/api/employees";

export const GET_ALL_EMPLOYEES = "GET_ALL_EMPLOYEES";

export const getAllEmployees = async (): Promise<Employee[]> => {
  try {
    const { data } = await httpClient.get(`${ENDPOINT}`);
    return data;
  } catch (error) {
    if (!axios.isAxiosError(error)) throw error;
    throw error.response?.data;
  }
};
