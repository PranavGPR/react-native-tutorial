import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.42.224:9000/api",
});

export default apiClient;
