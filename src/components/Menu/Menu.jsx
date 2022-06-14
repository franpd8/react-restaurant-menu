import "./Menu.css";

function Menu({ dishes, title, image }) {
  const meals = dishes.map((elemento) => {
    return (
      <div className="dishes" key={elemento.id}>
        <div>
          <h2 className="dishName">{elemento.name}</h2>
          <h3 className="dishDescription">{elemento.description}</h3>
        </div>
        <h2 className="dishPrice">{elemento.price.toFixed(2)}€</h2>
      </div>
    );
  });

  return (
    <div className="menu">
      <div>
        <h1 className="title">{title}</h1>
        <img src={image} className="foodImg" />
      </div>
      {meals}
    </div>
  );
}

export default Menu;
