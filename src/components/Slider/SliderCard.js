import React from 'react'

function SliderCard({obj, index, handleClick}) {
  return (
    <div>
                    <img src={`/images/planet${index + 1}.png`} alt='' className='image-slider'/>
                    <div className='over-image'>
                        <h1>{obj.title}</h1>
                        <p>{obj.system}</p>
                        <p>Distance: {obj.distance}</p>
                        <p>AUPopulation: {obj.aupopulation}</p>
                    </div>
                    <div className='more-info'>
                        <h1 className='planet-name'>{obj.title}</h1>
                        <p>{obj.description}</p>
                        <p>Explore this amazing cosmic marvel in a safe and fast trip with our aerospace company.</p>
                    </div>
                    <div className='purchase'>
                        <div>
                        <h1>{obj.price} €</h1>
                        <p>one way ticket</p>
                        </div>
                        <button className='btn-purchase' onClick={()=> handleClick(obj)}>
                            Purchase
                        </button>
                    </div>
    </div>
  )
}

export default SliderCard