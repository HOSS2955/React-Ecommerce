import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addToCart } from "../store/reducer/cartSlice";
import { useGetAllProductsQuery } from "../store/reducer/productsApi";
import { ButtonGroup } from "react-bootstrap";
import { useEffect, useState } from "react";

export default function Products() {
  // eslint-disable-next-line no-unused-vars
  const { items: products, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const history = useNavigate();

  const { data } = useGetAllProductsQuery();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    history("/cart");
  };
  const [items, setItems] = useState(data);

  const filterItem = (curcat) => {
    const newItem = data.filter((newVal) => {
      return newVal.category === curcat;
      // comparing category for displaying data
    });
    setItems(newItem);
  };
  const detailsOfproduct = (id, items) => {
    history(`Products/${id}`);
  };

  useEffect(() => {
    setItems(data);
  }, [data]);
  return (
    <div>
      <div className="home text-center bg-light">
        {status === "success" ? (
          <>
            <h2>Our Products</h2>
            <div className="text-center my-4">
              <ButtonGroup aria-label="Basic example">
                <button
                  className="btn btn-secondary ml-5"
                  onClick={() => setItems(data)}
                >
                  All
                </button>
                <button
                  className="btn btn-secondary ml-5"
                  onClick={() => filterItem("phones")}
                >
                  Phones
                </button>
                <button
                  className="btn btn-secondary ml-5"
                  onClick={() => filterItem("headphone")}
                >
                  HeadPHones
                </button>
                <button
                  className="btn btn-secondary ml-5"
                  onClick={() => filterItem("camera")}
                >
                  Cameras
                </button>
              </ButtonGroup>
            </div>
            <div className="products">
              {items &&
                items?.map((product) => (
                  <div key={product.id} className="product">
                    <h3>{product.name}</h3>
                    <img
                      src={product.image}
                      alt={product.name}
                      onClick={() => {
                        detailsOfproduct(product.id);
                      }}
                    />
                    <div className="details">
                      <span>{product.desc}</span>
                      <span className="price">${product.price}</span>
                    </div>
                    <button onClick={() => handleAddToCart(product)}>
                      Add To Cart
                    </button>
                  </div>
                ))}
            </div>
          </>
        ) : status === "pending" ? (
          <p>Loading...</p>
        ) : (
          <p>Unexpected error occured...</p>
        )}
      </div>
    </div>
  );
}
