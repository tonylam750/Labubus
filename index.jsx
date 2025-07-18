import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Labubu from "./pages/Labubus/Labubu";
import LabubuDetail from "./pages/Labubus/LabubuDetail";
import LabubuInfo from "./pages/Labubus/LabubuInfo";
import LabubuPricing from "./pages/Labubus/LabubuPricing";
import LabubuPhotos from "./pages/Labubus/LabubuPhotos";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import Quiz from "./pages/Quiz";

import "./server";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="labubu" element={<Labubu />} />
          <Route path="quiz" element={<Quiz />}></Route>
          <Route path="labubu/:id" element={<LabubuDetail />}>
            <Route index element={<LabubuInfo />} />
            <Route path="pricing" element={<LabubuPricing />} />
            <Route path="photos" element={<LabubuPhotos />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
