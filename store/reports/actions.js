import { reportsSlice } from "./slice";
import { getUserData } from "../../__lib__/helpers/HttpService"
const { actions: slice } = reportsSlice;

export const setReports = (token) => (dispatch) => {
  getUserData('/admin/reports', token)
  .then(response=>dispatch(slice.setReports(response)))
}
