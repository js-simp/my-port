import React from 'react'


function Summary() {

  //Investment Classes
  //RE - Real Estate , BI - Business Income, Bul - Bullion, CR-Credit, 
  const data = [
    {angle : 36, label:'RE', innerRadius : 200, radius : 300},
    {angle : 18, label : 'BI', innerRadius : 200, radius : 300},
    {angle : 1.5, label:'Bul', innerRadius : 200 , radius : 300},
    {angle : 1.5, label:'CR', innerRadius : 200 , radius : 300},
    {angle : 1.5, label:'CRY', innerRadius : 200 , radius : 300},
    {angle : 6, label:'SE', innerRadius : 200 , radius : 300}
  ];

  
  return (
    <div>
      <h1>My Investment Porfolio</h1>
    </div>
  )
}

export default Summary