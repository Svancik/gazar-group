import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/Home";
import { ProductDetail } from "./pages/ProductDetail/ProductDetail";
import { Products } from "./pages/Products/Products";
import { TermsAndConditions } from "./pages/TermsAndConditions/TermsAndConditions";
import { HowToOrder } from "./pages/HowToOrder/HowToOrder";
import FinishOrder from "./pages/FinishOrder/FinishOrder";

function App() {
  return (
    <div className="appWrapper">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/checkout" element={<FinishOrder />} />
          <Route path="/shopguide" element={<HowToOrder />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
