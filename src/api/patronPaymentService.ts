import axios from "axios";
axios.defaults.baseURL = import.meta.env.VITE_API_URL;

export async function createPatronPayment(data: any) {
  const res = await axios.post("/patronPayments", data);
  return res.data;
}

export async function updatePatronPayment(id: number, data: any) {
  const res = await axios.patch(`/patronPayments/${id}`, data);
  return res.data;
}
