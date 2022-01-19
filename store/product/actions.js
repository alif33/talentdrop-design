import { productSlice } from "./slice";
import { getData } from "../../__lib__/helpers/HttpService"
const { actions: slice } = productSlice;

export const setProducts = () => (dispatch) => {
  getData('/products')
  .then(response=>dispatch(slice.setProducts(response)))
}
