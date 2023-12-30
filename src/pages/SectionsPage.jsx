import React from 'react'
import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'
import image4 from '../images/image4.jpg'
import { NavLink } from 'react-router-dom'

export const SectionsPage = () => {
  
  fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>console.log(json))

  return (
    <>
      <div className='div-sec'>
        <NavLink  to={'/electronics'} >
          <img className='img-sec' src={image1} alt="" />
          <h2 className='h2-sec1'>Electronics</h2>
        </NavLink>
      </div>
      <div className='div-sec'>
        <NavLink  to={'/jewelery'} >
          <img className='img-sec' src={image2} alt="" />
          <h2 className='h2-sec2'>Jewelery</h2>
        </NavLink>
      </div>
      <div className='div-sec'>
        <NavLink  to={'/men-clothing'} >
          <img className='img-sec' src={image3} alt="" />
          <h2 className='h2-sec3'>Men Clothing</h2>
        </NavLink>
      </div>
      <div className='div-sec'>
        <NavLink  to={'/women-clothing'} >
          <img className='img-sec' src={image4} alt="" />
          <h2 className='h2-sec4'>Women Clothing</h2>
        </NavLink>
      </div>
    </>
  )
}
