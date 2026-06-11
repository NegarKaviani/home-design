import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import Gallery from "../pages/Gallery";
import News from "../pages/News";
import NewsDetail from "../pages/NewsDetail";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Products />} />
    <Route path="/products/:slug" element={<ProductDetails />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/news" element={<News />} />
    <Route path="/news/:slug" element={<NewsDetail />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
