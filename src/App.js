import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Cart from './componentes/Cart/Cart';
import NavBar from './componentes/navbar/NavBar';
import CartProvider from './componentes/CartContext/CartContext';
import Formulario from './componentes/Formulario/Formulario';

function App() {

    return (
        <>
            <BrowserRouter>
                <CartProvider>
                    <NavBar/>
                    <Routes>
                        <Route path='/' element={<ItemListContainer />} />
                        <Route path='/productos' element={<ItemListContainer />} />
                        <Route path='/categoria/:categoryId' element={<ItemListContainer />} />
                        <Route path='/detail/:detailId' element={<ItemDetailContainer/>} />
                        <Route path='/cart' element={<Cart />} />
                        <Route path='/checkout' element={<Formulario />} />
                    </Routes>
                </CartProvider>
            </BrowserRouter>
        </>
    );
}

export default App;

