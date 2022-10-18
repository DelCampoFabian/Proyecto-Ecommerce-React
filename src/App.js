import './App.css';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import NavBar from './componentes/navbar/NavBar';



function App() {

  let greeting= "Bienvenidos"

  return (
   <>
   <NavBar/>
   <ItemListContainer greeting={greeting}/>
   </>
  );
}

export default App;
