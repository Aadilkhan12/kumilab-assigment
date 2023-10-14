import React from 'react'
import Productlist from './Productlist'

function Bakery({bakery}) {
  return (
    <div ref={bakery}>
      <h2 style={{fontFamily:'Muli'}}>Bakery   &#62;</h2>
      <Productlist/>
    </div>
  )
}

export default Bakery