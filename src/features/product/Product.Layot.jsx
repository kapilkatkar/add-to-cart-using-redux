import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../cart/Cart.Slice";
import "./product.css";
const ProductList = () => {
  const [productLis, setProductList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((data) => setProductList(data));
  }, []);

  const onAddCart = (product) => {
    console.log({ product });
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h1>My Products</h1>
      <div className="product-list">
        {productLis.map((item) => {
          return (
            <div className="item" key={item.id}>
              <img src={item.image} className="item-image" alt="" />
              <div>
                <p>{item.title}</p>
                <button
                  onClick={() => {
                    onAddCart(item);
                  }}
                >
                  Add to cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
