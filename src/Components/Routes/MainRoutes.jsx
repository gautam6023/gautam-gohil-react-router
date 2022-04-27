import { Routes, Route } from "react-router-dom";
import { Navbar } from "../pages/Navbar";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { FAQ } from "../pages/FAQ ";
import { Products } from "../pages/Products";
import { Logout } from "../pages/Logout";
import { Login } from "../pages/Login";
import { Belts } from "../pages/Belts";
import { Wallets } from "../pages/Wallets";
import { Bags } from "../pages/Bags";
import { Accessories } from "../pages/Accessories";
import { Footer } from "../pages/Footer.jsx";
import { Cart } from "../pages/Cart";
export const MainRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />

        <Route path="/products/" element={<Products />}>
          <Route index path="belts" element={<Belts />} />
          <Route path="bags" element={<Bags />} />
          <Route path="wallets" element={<Wallets />} />
          <Route path="accessories" element={<Accessories />} />
        </Route>
        <Route path="/logout" element={<Logout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
};
