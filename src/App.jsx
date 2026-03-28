import BtmHeader from "./Components/header/BtmHeader";
import TopHeader from "./Components/header/TopHeader";
import Home from "./pages/Home/Home";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import ProInfo from "./pages/Home/Product.Details/ProInfo";
import CartPage from "./pages/cart/CartPage";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./Components/header/ScrollToTop";
import { AnimatePresence } from "motion/react";
import CatPage from "./pages/CategoryPage/CatPage";
import SearchResults from "./pages/SearchResults";
import Fev from "./pages/Favorites/Fev";
import Footer from "./Components/footer/Footer";



function App() {


  return (
    <>
      <header>
        <TopHeader />
        <BtmHeader />
      </header>

      <Toaster   position="top-center" toastOptions={{
        style: {
          background: '#e9e9e9',
          borderRadius: '5px',
          padding: '14px'
        }
      }}
        reverseOrder={false}  />


<ScrollToTop />

<AnimatePresence mode="wait">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/favorites" element={<Fev />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/product/:id" element={<ProInfo />} />
        <Route path="/category/:category" element={<CatPage />} />
      </Routes>
      
</AnimatePresence>

      <Footer />

    </>
  )
}

export default App
