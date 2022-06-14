import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import sandwhiches from "./components/constants/dishes"

function App() {

  // const sandwhiches = [
  //   {
  //     id:1,
  //     name:'Sándwich pollo',
  //     description:'Sándwich de pollo adobado casero con tomate seco,pepinillo agridulce, mayo amostazada y rúcula.',
  //     price:7.2
  //   },
  //   {
  //     id:2,
  //     name:'Grilled cheese',
  //     description:'Sándwich de Comté, Gruyer y Emmental con shiracha.',
  //     price:7.2
  //   },
  //   {
  //     id:3,
  //     name:'Bikini',
  //     description:'Sándwich de jamón cocido de La Selva con queso suizo y mostaza.',
  //     price:6.7
  //   },
  //   {
  //     id:4,
  //     name:'Mortadela',
  //     description:'Sándwich de mortadela italiana, queso suizo, tomate seco y mostaza.',
  //     price:7.3
  //   }
  // ]
  // const tapas = [
  //   {
  //     id:1,
  //     name:'Ensaladilla rusa',
  //     description:'Con cebollino, cebolla rosa encurtida y sus picos',
  //     price:6
  //   },
  //   {
  //     id:2,
  //     name:'Guacamole con mejillones en escabeche',
  //     description:'Con cilantro y cebollita morada',
  //     price:9.5
  //   },
  //   {
  //     id:3,
  //     name:'Ensalada de tomate',
  //     description:'Con alcaparras, cebollita roja encurtida y aove infusionado en ajo',
  //     price:6
  //   }
  // ]
  
  return (
    <div className="App">
      <Header/>
      <Menu dishes={sandwhiches}/>
      {/* <Menu dishes={tapas}/> */}
      
    </div>
  );
}

export default App;
