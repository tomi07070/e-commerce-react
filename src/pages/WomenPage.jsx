import React, { useContext, useEffect, useState } from 'react';
import { Card } from '../components/Card';
import { ProductosContext } from '../context/ProductosContext';
import { CarritoContext } from '../context/CarritoContext';
import { NavLink } from 'react-router-dom';


export const WomenPage = () => {
  const { productos } = useContext(ProductosContext);
  const { agregarCompra, eliminarCompra } = useContext(CarritoContext);
  const [WomensProducts, setWomensProducts] = useState([]);

  useEffect(() => {
    const womens = productos.filter(producto => producto.category === "women's clothing");
    setWomensProducts(womens);
  }, [productos]);

  const handleAgregar = (compra) => {
    agregarCompra(compra);
  };

  const handleQuitar = (id) => {
    eliminarCompra(id);
  };
  return (
      <>
        <NavLink to={'/sections'}><button className='btn-arrow'><i class="fa-solid fa-arrow-left"></i></button></NavLink>
        <h1>Women clothing </h1>
        <hr />
  
        {WomensProducts.map(producto => (
          <Card
            loading='lazy'
            key={producto.id}
            imagen={producto.image}
            titulo={producto.title}
            descripcion={producto.description}
            precio={producto.price}
            handleAgregar={() => handleAgregar(producto)}
            handleQuitar={() => handleQuitar(producto.id)}
          />
        ))}
      </>
  )
}
