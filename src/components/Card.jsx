import { useState } from "react"
import '../styles/card.css'

export const Card = ({ imagen, titulo, descripcion, precio, handleAgregar, handleQuitar, handleAumentar, handleDisminuir }) => {

    const [added, setAdded] = useState(false)

    const clickAgregar = () => {
        handleAgregar()
        setAdded(true)
    }
    const clickQuitar = () => {
        handleQuitar()
        setAdded(false)
    }

    return (
        <div className="tarjeta">
            <img src={imagen} alt={titulo} className="tarjeta-imagen" />
            <div className="tarjeta-contenido">
                <h3 className="tarjeta-titulo">{titulo}</h3>
                <p className="tarjeta-descripcion">{descripcion}</p>
                <p className="tarjeta-precio">{precio}$</p>

                {added
                    ?<div className="boton-quitar-div">  
                    <button
                        type="button"
                        className="boton-quitar"
                        onClick={clickQuitar}
                    >
                        Remove from cart
                    </button>
                    </div>
                    : 
                    <div className="boton-agregar-div">
                    <button
                        type="button"
                        className="boton-agregar"
                        onClick={clickAgregar}
                    >
                        Add to cart

                    </button>
                    </div>
                }

            </div>
        </div>
    )
}