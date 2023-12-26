import React from 'react'
<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'

const App = () => {

  return (
    <BrowserRouter>
    
      <Navbar />

      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route exact path='/categoria/:categoriaId'element={<ItemListContainer />} />
        <Route exact path='/producto/:id'  element={<ItemDetailContainer />} />
        <Route exact path="/cart" element={<Cart />} />
      
      </Routes>

    </BrowserRouter>
  )

=======
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'

const App = () => {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"Bienvenidos a TecnoCommerce"}/>
    </div>
  )
>>>>>>> f1e4275cb674659394df947d754fd81671a97415
}

export default App