import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import menuDishes from "./components/constants/dishes";
import sandwhichImg from "./assets/sandwhich.png"
import tapasImg from "./assets/tapas.png"


function App() {
  return (
    <div className="App">
      <Header />
      <Menu dishes={menuDishes.sandwhiches} title={"Sandwiches"} image={sandwhichImg} />
      <Menu dishes={menuDishes.tapas} title={"Tapas"} image={tapasImg} />
    </div>
  );
}

export default App;
