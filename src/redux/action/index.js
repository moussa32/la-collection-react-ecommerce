//For Add Item to cart
export const addCart = product => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};

//For Delete Item from cart
export const deleteCart = product => {
  return {
    type: "REMOVE_FROM_CART",
    payload: product,
  };
};
