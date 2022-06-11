import React from 'react'
import '../node_modules/react-vis/dist/style.css';
import {RadialChart} from 'react-vis';

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
    <RadialChart
  data={data}
  width={500}
  height={500} />
  )
}

export default Summary