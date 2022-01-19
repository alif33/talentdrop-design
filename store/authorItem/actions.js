import { authorItemSlice } from "./slice";
import { getData } from "../../__lib__/helpers/HttpService"
const { actions: slice } = authorItemSlice;

export const setAuthorItem = (id) => (dispatch) => {
  getData(`/products/author/${id}`)
  .then(response=>dispatch(slice.setAuthorItem(response)))
}
