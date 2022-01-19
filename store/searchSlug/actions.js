import { slugSlice } from "./slice";
import { getData } from "../../__lib__/helpers/HttpService"
const { actions: slice } = slugSlice;

export const setCategorySlug = (slug) => (dispatch) => {
  getData(`/product/c/slug/${slug}`)
  .then(response=>dispatch(slice.setCategorySlug(response)))
}
