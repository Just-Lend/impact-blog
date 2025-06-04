import axios from "axios";
axios.defaults.baseURL = import.meta.env.VITE_API_URL;
export async function createStripeCustomer(email: string, name: string) {
  try {
    const customerData = await getStripeCustomer(email);
    if (customerData.customer) return customerData;
    const res = await axios.post(
      "stripe/customer",
      {
        email,
        name
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    return res.data;
  } catch (error) {
    throw error;
  }
}
export async function getStripeCustomer(email: string) {
  try {
    const res = await axios.get("stripe/customer?email=" + email, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function oneTimeCheckout(data: any) {
  const res = await axios.post(
    `/stripe/impact-blog/one-time/create-checkout-session`,
    {
      url: data.url,
      prodName: data.prodName,
      amount: data.amount,
      email: data.email
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
      email: data.email
    }
  );
  return res.data;
}
