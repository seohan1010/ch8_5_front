import { apiClient } from "./ApiClient";

export const userLogin = (email: any, password: any) => {
  return apiClient.post("/auth/login", { email: email, password: password });
};

export const executeBasicAuthenticationService = (token : any) => {
  return apiClient.get(`/basicauth`, { headers: { Authorization: token } });
};

