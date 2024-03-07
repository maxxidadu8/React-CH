
import './App.css'
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"-Bienvenido a CarAccesories-"}/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer greeting={"-CarAccesories | Productos filtrados-"}/>}/>
          <Route path="/detail/:productId" element={<ItemDetailContainer/>}/> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
