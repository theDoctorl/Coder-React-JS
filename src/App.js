import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './components/Inicio/Inicio';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar.jsx';
import Carrito from './components/carrito/carrito';
import Provider from './components/Context/Context';




function App() {

  return (
    <Provider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route exact path="/categoria/:genero" element={<ItemListContainer />} />
          <Route exact path="/detalle/:id" element={<ItemDetailContainer />} />
          <Route exact path="/carrito" element={<Carrito />} />
        </Routes>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
