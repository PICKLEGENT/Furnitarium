import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Info from "./pages/Info";
import Contacts from "./pages/Contacts";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/Catalog" Component={Catalog} />
        <Route path="/Info" Component={Info} />
        <Route path="/Contacts" Component={Contacts} />
        <Route path="/Cart" Component={Cart} />
        <Route path="/404" Component={NotFound} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
