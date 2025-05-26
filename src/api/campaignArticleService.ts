import axios from "axios";
axios.defaults.baseURL = import.meta.env.VITE_API_URL;
//axios.defaults.baseURL = "http://localhost:3001/api/";
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

export async function getCampaignArticlesByCategory(
  categoryId: number,
  categoryName: string
) {
  const res = await axios.get(`/campaignArticles/category`, {
    params: {
      category_id: categoryId,
      category_name: categoryName,
    },
  });
  return res.data;
}

export async function getCampaignArticlesByUNSDGs(unsdg: number) {
  const res = await axios.get(`/campaignArticles/unsdg`, {
    params: {
      unsdg: unsdg,
    },
  });
  return res.data;
}

export async function getCampaignArticlesByLocalAuthorityId(
  local_authority_id: number
) {
  const res = await axios.get(`/campaignArticles/local-authority`, {
    params: {
      local_authority_id: local_authority_id,
    },
  });
  return res.data;
}
