import axios from "axios";
//axios.defaults.baseURL = "https://just-lend-node-prod.herokuapp.com/api/";
axios.defaults.baseURL = "http://localhost:3001/api/";
//import.meta.env.VITE_API_URL;
export async function getCampaignArticles() {
  const res = await axios.get(`/campaignArticles/latest-campaign-articles`, {
    params: {
      limit: 10,
    },
  });
  return res.data;
}

export async function getCampaignArticleBySlug(slug: string) {
  const res = await axios.get(`/campaignArticles/slug`, {
    params: {
      slug: slug,
    },
  });
  return res.data;
}

export async function getCampaignArticlesByCategory(category: string) {
  const res = await axios.get(`/campaignArticles/category`, {
    params: {
      category: category,
    },
  });
  return res.data;
}
