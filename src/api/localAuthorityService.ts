import axios from "axios";
axios.defaults.baseURL = import.meta.env.VITE_API_URL;
export async function getLocalAuthorities() {
  const res = await axios.get("/localAuthorities");
  return res.data;
}
export async function getLocalAuthorityDataById(laId: number) {
  const res = await axios.get(
    `/localAuthorities?filter=` +
      encodeURIComponent(
        JSON.stringify({
          where: {
            id: laId,
          },
        })
      )
  );

  return res.data;
}

export async function getLocalAuthoritiesByCountry(country: string) {
  const res = await axios.get(
    `/localAuthorities?filter=` +
      encodeURIComponent(
        JSON.stringify({
          where: {
            country: country,
          },
        })
      )
  );

  return res.data;
}
