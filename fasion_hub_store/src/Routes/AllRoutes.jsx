import { Route, Routes } from "react-router-dom";
import { WomenSaree } from "../Component/Navbar/WomenSaree";

export function AllRoutes() {
  return (
    <Routes>
      <Route path="/products" element={<WomenSaree />} />
    </Routes>
  );
}
