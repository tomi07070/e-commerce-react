import React, { useContext, useEffect, useState } from 'react';
import { Card } from '../components/Card';
import { ProductosContext } from '../context/ProductosContext';
import { CarritoContext } from '../context/CarritoContext';
import { NavLink } from 'react-router-dom';

export const ElectronicsPage = () => {
  const { productos } = useContext(ProductosContext);
  const { agregarCompra, eliminarCompra } = useContext(CarritoContext);
  const [electronicsProducts, setElectronicsProducts] = useState([]);

  // Filtrar productos de la sección "Electronics"
  useEffect(() => {
    const electronics = productos.filter(producto => producto.category === 'electronics');
    setElectronicsProducts(electronics);
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
      <h1>Electronics </h1>
      <hr />

      {electronicsProducts.map(producto => (
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
  );
};

