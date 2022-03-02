import axios from "axios";

export function fetchFake(dataRes, duration = 2000) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(dataRes);
    }, duration);
  });
}

export const fakeAPI = {
  async getProducts() {
    return await (
      await axios.get("http://localhost:8080")
    ).data;
  },
  async addProducts(product) {
    return await (
      await axios.post("http://localhost:8080", product)
    ).data;
  },
  async deleteProduct(id) {
    return await await axios.delete(`http://localhost:8080/${id}`);
  },
};
