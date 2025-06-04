import axios from "axios";
axios.defaults.baseURL = import.meta.env.VITE_API_URL;

export async function createRegisterInterest(data: any) {
  const res = await axios.post("/registerInterests", data);
  return res.data;
}
