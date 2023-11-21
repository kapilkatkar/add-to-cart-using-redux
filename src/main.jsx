import ReactDOM from "react-dom/client";
import store from "./redux/Store.jsx";
import { Provider } from "react-redux";
import ProductList from "./features/product/Product.Layot.jsx";
import MyCart from "./features/cart/Cart.Layout.jsx";
import UserComponent from "./features/users/user.layout.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <div style={{ display: "flex", gap: "12px" }}>
      <div style={{ flex: "20%" }}>
        <ProductList></ProductList>
      </div>
      <div style={{ flex: "20%" }}>
        <MyCart></MyCart>
      </div>
      <UserComponent></UserComponent>
    </div>
  </Provider>
);
