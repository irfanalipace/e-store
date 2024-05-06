import {
  addProductStart,
  addProductSuccess,
  addProductFailure,
} from "../features/products/productsSlice";

export const addProduct = (item) => async (dispatch) => {
  try {
    dispatch(addProductStart());
    const addedItem = await addToCartApi(item);
    dispatch(addProductSuccess(addedItem));
  } catch (error) {
    dispatch(addProductFailure(error));
  }
};

const addToCartApi = (item) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(item);
    }, 500);
  });
};
export default addToCartApi;
