import { followerSlice } from "./slice";
import { getData } from "../../__lib__/helpers/HttpService"
const { actions: slice } = followerSlice;

export const setUserFollower = (id) => (dispatch) => {
  getData(`/followers/${id}`)
  .then(response=>dispatch(slice.setUserFollower(response)))
}

export const setUserFollowing = (id) => (dispatch) => {
  getData(`/followings/${id}`)
  .then(response=>dispatch(slice.setUserFollowing(response)))
}

