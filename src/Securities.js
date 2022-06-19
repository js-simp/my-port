//Securities investment Analytics
import React from 'react';
import Slides from './Slides'

function Securities() {
  const my_securities = [
    {asset : 'Fixed Depost', id: 1, initiated : '10/11/2021', period_in_years : 2, growth : 17.5, amount : '10,000'},
    {asset : 'Money Market', id: 2, initiated : '06/01/2020', period_in_years : 0.5, growth : 12, amount : '10,000'},
    {asset : 'Treasury Bonds', id: 3, initiated : '10/06/2020', period_in_years : 0.25, growth : 21, amount : '10,000'},
    {asset : 'Fied Depost', id: 4, initiated : '10/10/2021', period_in_years : 1, growth : 17, amount : '10,000'},
    {asset : 'Insurance', id: 5, initiated : '31/12/2021', period_in_years : 5, growth : 30, amount : '10,000'},
    {asset : 'Index Fund', id: 6, initiated : '10/11/2021', period_in_years : 10, growth : 18.9, amount : '10,000'}
]


  return (
    
      <Slides securities = {my_securities}/>

  )
}

export default Securities