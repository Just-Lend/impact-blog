import axios from "axios";
axios.defaults.baseURL = import.meta.env.VITE_API_URL;
export async function getAllCampaignCategories() {
  const res = await axios.get(`/campaignCategories`);
  return res.data;
}
