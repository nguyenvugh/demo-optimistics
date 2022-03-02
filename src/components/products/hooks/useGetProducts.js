import { useQuery } from "react-query";
import { fakeAPI } from "../../../fakeAPI.mock";

export function useGetProducts() {
  return useQuery("getProducts", fakeAPI.getProducts);
}
