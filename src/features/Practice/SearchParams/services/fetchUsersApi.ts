import axios from "axios";
import { TUser } from "@/features/Practice/SearchParams/types/user";
import { TApiResponse } from "@/types/api";

export const fetchUsersApi = async (params: string | undefined): Promise<TUser[]> => {
  try {
    const response = await axios.get<TApiResponse<TUser[]>>(
      params ? `/api/users/?keyword=${params}` : "/api/users"
    );
    return response.data.data;
  } catch (error) {
    throw new Error("Failed to post project page.");
  } finally {
  }
};
