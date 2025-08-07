import { ButtonConfig } from "@/lib/types";
import { API_BASE_URL, DEFAUL_COLOR } from "@/lib/сonstants";
import axios from "axios";

export class ApiService {
  private static instance: ApiService;

  private constructor() {}

  static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }
    return ApiService.instance;
  }

  async getButtonConfigs(): Promise<ButtonConfig[]> {
    try {
      const response = await axios.get<ButtonConfig[]>(API_BASE_URL);
      return response.data;
    } catch (error) {
      console.error("Error fetching button configs:", error);
      return [];
    }
  }

  async getButtonConfigById(id: number): Promise<ButtonConfig | undefined> {
    try {
      const response = await axios.get<ButtonConfig>(`${API_BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching button config with id ${id}:`, error);
      return undefined;
    }
  }

  async updateButtonConfigInStorage(
    id: number,
    newConfig: Partial<ButtonConfig>
  ): Promise<void> {
    try {
      await axios.patch(`${API_BASE_URL}/${id}`, newConfig);
    } catch (error) {
      console.error(`Error updating button config with id ${id}:`, error);
    }
  }

  async deleteButtonConfigFromStorage(id: number): Promise<void> {
    try {
      await axios.patch(`${API_BASE_URL}/${id}`, {
        color: DEFAUL_COLOR,
        hyperlink: "",
        isConfigured: false,
        title: "",
      });
    } catch (error) {
      console.error(`Error deleting button config with id ${id}:`, error);
    }
  }
}

export const apiService = ApiService.getInstance();
