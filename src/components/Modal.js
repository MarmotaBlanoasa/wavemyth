import React from 'react'

function Modal({cart, size, handleClick, handleRemove, setShow}) {
      const itemsPrice = cart.reduce((a,c)=> a + c.price * c.q, 0)
      const tax = itemsPrice * 0.19;
      const totalPrice = itemsPrice + tax;

  return (
    <div className={size? 'modal-container': 'invisible'} onMouseEnter={()=> setShow(true)} onMouseLeave={()=> setShow(false)}>
        {cart.map((item,index)=>{
            return <div className='modal-content' key={index}>
                <p>{item.title} ticket</p>
                <div className='buttons'>
                <button onClick={()=> handleClick(item)}>+</button>
                <p className='quantity'>{item.q} </p>
                <button onClick={()=> handleRemove(item)}>-</button>
                </div>
                <p>
                x {item.price} €
                </p>

            </div>
        })}
        {size !== 0 &&
            <div className='total'>
              <hr></hr>
                <p>Price(without VAT): {itemsPrice.toFixed(2)} €</p>
                <p>Total VAT: {tax.toFixed(2)} €</p>
                <p className='total-sum'>Total Value: {totalPrice.toFixed(2)} €</p>
            </div>  
        }
    </div>
  )
}

export default Modal