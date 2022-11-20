import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart, decreaseCart } from "../store/reducer/cartSlice";
import { useGetAllProductsQuery } from "../store/reducer/productsApi";

export default function ProductDetails() {
  const dispatch = useDispatch();
  const { data } = useGetAllProductsQuery();

  const { id } = useParams();
  const product = data[id - 1];

  const cart = useSelector((state) => state.cart);
  const cartItem = cart.cartItems;

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  // const quantity = () => {
  //   const find = cartItem.find((el) => {
  //     return el.id === book.id;
  //   });
  //   if (find) {
  //     setCount(find.cartQuantity);
  //     return count;
  //   } else {
  //     setCount(0);
  //     return count;
  //   }
  // };

  const quantity = () => {
    const find = cartItem.find((el) => {
      return el.id === product.id;
    });
    if (find) {
      return find.cartQuantity;
    } else {
      return 0;
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="border border-1  rounded bg-dark text-light">
      <div className="row p-5">
        <div className="col-5">
          <img src={product.image} className="col-12 imgs" alt="" />
        </div>
        <div className="col-6 p-5">
          <div className="row">
            <h2 className="fw-bolder text-capitalize ">{product.name}</h2>
            <h3 className="fw-bold mb-5 mt-5">${product.price}</h3>
            <p>Description : {product.desc}</p>
          </div>
          <div className="row mt-5">
            <button
              className="btn btn-warning col-2 "
              onClick={() => handleDecreaseCart(product)}
            >
              -
            </button>
            <div className="count col-1 text-center mb-1">{quantity()}</div>
            <button
              className="btn btn-primary col-2 "
              onClick={() => handleAddToCart(product)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
