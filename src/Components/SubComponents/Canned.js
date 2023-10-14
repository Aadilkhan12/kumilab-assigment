import React from 'react'
import Productlist from './Productlist'

function Canned({canned}) {
  return (
    <div ref={canned}><h2 style={{fontFamily:'Muli'}}>Canned &#62;</h2>
      <Productlist/>
    </div>
  )
}

export default Canned