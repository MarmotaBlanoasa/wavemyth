import React from 'react'
import suitcase from '../icons/suitcase.svg'
import rocket from '../icons/rocket.svg'
import leafs from '../icons/leafs.svg'
import arrow from './Slider/arrows/next.png'

function Benefits() {
  return (
    <div className='benefits-container'>
        <div className='img-container'>
            <div className='benefit-container'>
            <img src={suitcase} alt='' />
                <p>pack</p>
            </div>
        <img src={arrow} alt='' />
        <div className='benefit-container'>
            <img src={rocket} alt='' />
                <p>fly</p>
            </div>
        <img src={arrow} alt='' />
        <div className='benefit-container'>
            <img src={leafs} alt='' />
                <p>live</p>
            </div>
        <img src={arrow} alt='' />
        </div>
        <div className='enjoy-container'>
            <h1>ENJOY</h1>
            <p>A NEW WORLD!</p>
        </div>
    </div>
  )
}

export default Benefits