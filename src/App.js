/***
 * Snapdeal Webapp routes
 * All routes have saperate pages from Pages folder
 * Pages and Components have js and jsx extensions respectively
 */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Authentication from "./Pages/Authentication";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import ShortLists from "./Pages/ShortLists";
import Categories from "./Pages/Categories";
import SingleProduct from "./Components/Product/SingleProduct";
import Login from "./Pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />}>
          <Route path="/products" element={<Products />}>
            <Route path="/products/:category" element={<Categories />}>
              <Route
                path="/products/:category/:id"
                element={<SingleProduct />}
              />
            </Route>
          </Route>
        </Route>
        <Route path="/auth" element={<Authentication />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/mywhishlist" element={<ShortLists />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
