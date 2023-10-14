import React from 'react'
import Productlist from './Productlist'

function Frozen({frozen}) {
  return (
    <div ref={frozen}><h2 style={{fontFamily:'Muli'}}>Frozen &#62;</h2>
      <Productlist/>
    </div>
  )
}

export default Frozen