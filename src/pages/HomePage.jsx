import React from 'react'
import image  from '../images/image.webp'
import { NavLink } from 'react-router-dom'


export const HomePage = () => {
    
    return (
    <>
        <h1 className='h1-h'>The best Shop online</h1>
        <div className='img-h-c'>
            <img className='img-h' src={image} alt="" />
        </div>
        <div className='btn-h-c'>
            <button className='btn-h'><NavLink className='a-h' to={'/compras'}>Get Started</NavLink></button>
        </div>
    </>
  )
}
