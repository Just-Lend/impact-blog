import axios from "axios";
axios.defaults.baseURL = import.meta.env.VITE_API_URL;

export async function createPatron(data: any) {
  const patron = await getPatronByEmail(data.email);
  if (patron) {
    //update patron
    return patron;
  }
  const res = await axios.post("/patrons", data);
  return res.data;
}
export async function updatePatron(id: number, data: any) {
  const res = await axios.patch(`/patrons/${id}`, data);
  return res.data;
}
export async function getPatronByEmail(email: string) {
  const res = await axios.get(`/patrons/get-by-email`, {
    params: {
      email: email
    }
  });
  let patron = null;
  if (res.data.length) patron = res.data[0];
  return patron;
}
