import ReactDOM from "react-dom/client";
import store from "./redux/Store.jsx";
import { Provider } from "react-redux";
import ProductList from "./features/product/Product.Layot.jsx";
import MyCart from "./features/cart/Cart.Layout.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <div style={{ display: "flex", gap: "12px" }}>
      <div style={{ flex: "60%" }}>
        <ProductList></ProductList>
      </div>
      <div style={{ flex: "40%" }}>
        <MyCart></MyCart>
      </div>
    </div>
  </Provider>
);
