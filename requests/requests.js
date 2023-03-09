import axios from "axios";

export const requests = () => {
  return axios
    .get("https://course-api.com/react-store-products")
    .then((response) => {
      return response;
    });
};

export const user = (data) => {
  return axios
    .post("https://course-api.com/axios-tutorial-post", data)
    .then((res) => {
      return res;
    });
};
