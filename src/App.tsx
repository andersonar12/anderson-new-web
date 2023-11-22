import { Routes, Route, Outlet } from "react-router-dom";
import { Home } from "./pages/Home";
import { Details } from "./pages/Details";
import { Header } from "./components/Header";
import { BackToTop } from "./components/BackToTop";
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="details" element={<Details />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <BackToTop />
    </div>
  );
}
