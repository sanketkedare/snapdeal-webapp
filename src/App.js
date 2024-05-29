import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Authentication from "./Pages/Authentication";
import Products from "./Pages/Products";
import { useSelector } from 'react-redux';
import Cart from "./Pages/Cart";
import ShortLists from "./Pages/ShortLists";


function App() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const user = useSelector((state) => state.user.user);  
  console.log("user", user); 
  console.log("isAuthenticated", isAuthenticated);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/products" element={<Products />} />
        </Route>
        <Route path="/auth" element={<Authentication />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/mywhishlist" element={<ShortLists/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
