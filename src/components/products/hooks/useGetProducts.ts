import { useQuery } from "react-query";
import { QUERY_KEYS } from "src/common/constants/querykeys.constants";
import { fakeAPI } from "../../../fakeAPI.mock";
import { Products } from "../interfaces";

export function useGetProducts() {
  return useQuery<Products>(QUERY_KEYS.PRODUCT_LIST, fakeAPI.getProducts);
}
