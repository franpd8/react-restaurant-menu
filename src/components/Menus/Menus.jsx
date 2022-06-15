import Menu from "./Menu/Menu";
import menuDishes from "../constants/dishes";
import sandwhichImg from "../../assets/sandwhich.png";
import tapasImg from "../../assets/tapas.png";
const Menus = () => {
    console.log(menuDishes)
  return (
    <>
      <Menu
        dishes={menuDishes.sandwhiches} title={"Sandwiches"} image={sandwhichImg}
      />
      <Menu dishes={menuDishes.tapas} title={"Tapas"} image={tapasImg} />
    </>
  );
};

export default Menus;
