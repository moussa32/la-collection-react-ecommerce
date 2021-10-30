const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;
  const exist = state.find(x => x.id === product.id);

  switch (action.type) {
    case "ADD_TO_CART":
      //Check if Product is Already Exist
      if (exist) {
        return state.map(x => (x.id === product.id ? { ...x, qty: x.qty + 1 } : x));
      } else {
        const product = action.payload;
        return [...state, { ...product, qty: 1 }];
      }
      break;

    case "REMOVE_FROM_CART":
      if (exist.qty === 1) {
        return state.filter(x => x.id !== exist.id);
      } else {
        return state.map(x => (x.id === product.id ? { ...x, qty: x.qty - 1 } : x));
      }
      break;

    default:
      return state;
      break;
  }
};

export default handleCart;
