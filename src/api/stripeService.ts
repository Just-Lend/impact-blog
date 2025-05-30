import axios from "axios";
axios.defaults.baseURL = import.meta.env.VITE_API_URL;
export async function oneTimeCheckout(data: any) {
  const res = await axios.post(
    `/stripe/impact-blog/one-time/create-checkout-session`,
    {
      url: data.url,
      prodName: data.prodName,
      amount: data.amount,
      email: data.email,
    }
  );
  return res.data;
}

export async function monthlyCheckout(data: any) {
  const res = await axios.post(
    `/stripe/impact-blog/subscription/create-checkout-session`,
    {
      url: data.url,
      prodName: data.prodName,
      amount: data.amount,
      email: data.email,
    }
  );
  return res.data;
}
