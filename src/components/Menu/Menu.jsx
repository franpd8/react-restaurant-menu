import "./Menu.css";
import sandwhich from "../../assets/sandwhich.png"

function Menu({dishes}) {
  const sandwhiches = dishes.map((elemento) => {
    return (
      <div className="dishes">
        <div>
          <h2 className="dishName">{elemento.name}</h2>
          <h3 className="dishDescription">{elemento.description}</h3>
        </div>
        <h2 className="dishPrice">{elemento.price.toFixed(2)}</h2>
      </div>
    );
   });

//   const tapas = dishes.map((elemento) => {
//     return (
//       <div className="dishes">
//         <div>
//           <h2 className="dishName">{elemento.name}</h2>
//           <h3 className="dishDescription">{elemento.description}</h3>
//         </div>
//         <h2 className="dishPrice">{elemento.price}</h2>
//       </div>
//     );
//   });

  return (
  <div className="menu">
      <div><h1 className="title">Sándwiches</h1>
      <img src={sandwhich} className="foodImg"/></div>
      {sandwhiches}
      {/* <h1 className="title">Tapas</h1>
      {tapas} */}
      </div>
      )
}

export default Menu;
