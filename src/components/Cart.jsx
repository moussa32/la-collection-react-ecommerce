import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { deleteCart, addCart } from "../redux/action";

const Cart = () => {
  const state = useSelector(state => state.handleCart);
  const dispatch = useDispatch();

  const handleClose = item => {
    dispatch(deleteCart(item));
  };

  const incressItem = item => {
    dispatch(addCart(item));
  };

  const cartItems = cartItem => {
    console.log(cartItem);
    return (
      <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
        <div className="container py-4">
          <button
            onClick={() => handleClose(cartItem)}
            className="btn-close float-end"
            aria-label="Close"
          ></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img src={cartItem.image} alt={cartItem.title} height="200px" width="180px" />
            </div>
            <div className="col-md-4">
              <h3>{cartItem.title}</h3>
              <p className="lead fw-bold">$ {cartItem.price * cartItem.qty}</p>
              <div className="d-flex align-items-center mt-5">
                <button className="btn btn-outline-dark" onClick={() => handleClose(cartItem)}>
                  -
                </button>
                <p className="mx-2 mb-0 fw-bold">{cartItem.qty}</p>
                <button className="btn btn-outline-dark" onClick={() => incressItem(cartItem)}>
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };

  const button = () => {
    return (
      <div className="container">
        <div className="row">
          <NavLink to="/checkout" className="btn btn-outline-primary mb-5 w-25">
            Proceed To checkout
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && button()}
    </>
  );
};

export default Cart;
