import { ProductFormProvider } from "./providers/ProductFormProvider";
import { ProductListProvider } from "./providers/ProductListProvider";
import Wrapper from "./Wrapper";

function Products() {
  return (
    <Wrapper>
      <ProductListProvider />
      <ProductFormProvider />
    </Wrapper>
  );
}

export { Products };
