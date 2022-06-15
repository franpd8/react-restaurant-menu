import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Menus from "./components/Menus/Menus";
import Reservation from "./components/Reservation/Reservation";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={ <Menus />} />
          <Route path="/reservation" element={ <Reservation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
