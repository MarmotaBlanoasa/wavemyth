import React from 'react'
import house from '../icons/home.svg'
import moon from '../icons/moon.svg'
import spaceship from '../icons/spaceship.svg'
import cart from '../icons/cart.svg'
function Header({setShow, size}) {
  return (
    <div className='header'>
        <div className='flex-container'>
            <div className='container'>
            <h1 className='logo'><span className='bold'>C</span>O<span className='bold'>SM</span>O<span className='bold'>S</span></h1>
            <div className='button-header'>
                <img src={house} alt='house'/>
                <p>House</p>
            </div>
            <div className='button-header'>
                <img src={moon} alt='house'/>
                <p>Destinations</p>
            </div>
            <div className='button-header'>
                <img src={spaceship} alt='house'/>
                <p>Spaceships</p>
            </div>
            </div>
            
   
            <div className='button-header cart' onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
                <img src={cart} alt='house'/>
                <p className={size ? 'red' : null}>{size}</p>
            </div>
        </div>
    </div>
  )
}

export default Header