import { questionSlice } from "./slice";
import { getData } from "../../__lib__/helpers/HttpService"
const { actions: slice } = questionSlice;

export const setQuestions = (id) => (dispatch) => {
  getData(`/product/conversations/${id}`)
  .then(response=>dispatch(slice.setQuestions(response)))
}
