import React from 'react'
import next from './arrows/next.png'
import prev from './arrows/prev.png'
function BtnSlider( moveSlide ) {
  return (
    <button
      onClick={moveSlide.moveSlide}
      className={moveSlide.direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={moveSlide.direction === "next" ? next : prev} alt=''/>
    </button>
  )
}

export default BtnSlider