import axios from "axios";
import { Products } from "./components/products/interfaces";

export function fetchFake(dataRes, duration = 2000) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(dataRes);
    }, duration);
  });
}

export const fakeAPI = {
  async getProducts() {
    return (await (
      await axios.get("http://localhost:8080")
    ).data) as Products;
  },
  async addProducts(product: Products) {
    return (await (
      await axios.post("http://localhost:8080", product)
    ).data) as Products;
  },
  async deleteProduct(id?: string | number) {
    return await axios.delete(`http://localhost:8080/${id}`);
  },
};
