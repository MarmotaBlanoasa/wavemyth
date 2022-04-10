import React, {useState} from 'react'
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider'
import SliderCard from './SliderCard'
function Slider({handleClick}) {
    
    // Slider funcionality

    const [sliderIndex, setSliderIndex] = useState(1)

    const nextSlide = () =>{
        if(sliderIndex !== dataSlider.length){
            setSliderIndex(sliderIndex + 1)
        }
        else if (sliderIndex === dataSlider.length){
            setSliderIndex(1)
        }
    }

    const prevSlide = () =>{
        if(sliderIndex !== 1){
            setSliderIndex(sliderIndex - 1)
        }
        else if (sliderIndex === 1){
            setSliderIndex(dataSlider.length)
        }
    }


 

  return (
    <div className='container-slider'>
        {dataSlider.map((obj, index)=>{
            return (
                <div key={obj.id} className={sliderIndex === index + 1 ? "slide active-anim" : "slide"}>
                    <SliderCard obj={obj} index={index} handleClick={handleClick}/>
                </div>
            )
        })}
       
            <BtnSlider moveSlide={nextSlide} direction={'next'} />
            <BtnSlider moveSlide={prevSlide} direction={'prev'}/>
    </div>
  )
}

export default Slider