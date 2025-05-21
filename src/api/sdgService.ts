import axios from "axios";
axios.defaults.baseURL = import.meta.env.VITE_API_URL;
export async function getSDGs() {
  const res = await axios.get(`/sustainableDevelopmentGoals/`);
  return res.data;
}
