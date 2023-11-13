import axios from "axios";

export const getProduct = async () => {
  const response = await axios.get(
    "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=20&sortBy=id&orderBy=ASC"
  );
  return response.data;
};
