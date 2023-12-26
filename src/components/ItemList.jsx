import React from 'react'
<<<<<<< HEAD
import Item from './Item'

const ItemList = ({productos}) => {
  return (
    <div>
      {
        productos.map((p) => {
          return (
            <Item
                key={p.id}
                titulo={p.titulo}
                descripcion={p.descripcion}
                precio={p.precio}
                id={p.id}
             />   
          )
        })
      }
    </div>
=======

const ItemList = () => {
  return (
    <div>ItemList</div>
>>>>>>> f1e4275cb674659394df947d754fd81671a97415
  )
}

export default ItemList