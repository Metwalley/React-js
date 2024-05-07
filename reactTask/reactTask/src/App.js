import Navbar from "./compoenents/Navbar";
import ProductsList from "./compoenents/ProductsList";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./compoenents/ProductDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ProductsList />
            </>
          }
        />
        <Route path="product/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
