import React, { useContext, useEffect, useState } from 'react';
import { Card } from '../components/Card';
import { ProductosContext } from '../context/ProductosContext';
import { CarritoContext } from '../context/CarritoContext';
import { NavLink } from 'react-router-dom';


export const MensPage = () => {
  const { productos } = useContext(ProductosContext);
  const { agregarCompra, eliminarCompra } = useContext(CarritoContext);
  const [MensProducts, setMensProducts] = useState([]);

  useEffect(() => {
    const mens = productos.filter(producto => producto.category === "men's clothing");
    setMensProducts(mens);
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
      <h1>Men clothing </h1>
      <hr />

      {MensProducts.map(producto => (
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

