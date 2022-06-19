//Real Estate investment Analytics

import React from 'react'

function RealEstate(props) {
  const setRealEstate = props.setRealEstate;
  return (
    <div>
    <nav>
      <button onClick={() => setRealEstate(null)}>Summary</button>
    </nav>
    <div>RealEstate</div>
    </div>
  )
}

export default RealEstate