import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import Products from "./components/ProductsGrid/Products";
import Orders from "./components/OrdersGrid/Orders";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/orders" element={<Orders />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
