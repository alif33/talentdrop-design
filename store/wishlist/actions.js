import { wishlistSlice } from "./slice";
import { getUserData } from "../../__lib__/helpers/HttpService"
const { actions: slice } = wishlistSlice;

export const setWishlist = (totken) => (dispatch) => {
  getUserData('/product/wishlists', totken)
  .then(response=>dispatch(slice.setWishlist(response)))
}

