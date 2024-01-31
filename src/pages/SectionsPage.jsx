import React from 'react'
import image1 from '../images/image1.webp'
import image2 from '../images/image2.webp'
import image3 from '../images/image3.webp'
import image4 from '../images/image4.webp'
import { NavLink } from 'react-router-dom'

export const SectionsPage = () => {
  
  return (
    <>
    <div className='container'>
      <div className='div-sec'>
        <NavLink  to={'/electronics'} >
          <img className='img-sec' src={image1} alt="" />
        </NavLink>
      </div>
      <div className='div-sec'>
        <NavLink  to={'/jewelery'} >
          <img loading='lazy' className='img-sec' src={image2} alt="" />
        </NavLink>
      </div>
      <div className='div-sec'>
        <NavLink  to={'/men-clothing'} >
          <img loading='lazy' className='img-sec' src={image3} alt="" />
        </NavLink>
      </div>
      <div className='div-sec'>
        <NavLink  to={'/women-clothing'} >
          <img loading='lazy' className='img-sec' src={image4} alt="" />
        </NavLink>
      </div>
    </div>
    </>
  )
}
