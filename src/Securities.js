//Securities investment Analytics
import React from 'react';
import Slides from './Slides'

function Securities(props) {
  const my_securities = [
    {asset : 'Fixed Depost', initiated : '10/11/2021', period_in_years : 2, growth : 17.5, amount : '10,000'},
    {asset : 'Money Market', initiated : '06/01/2020', period_in_years : 0.5, growth : 12, amount : '10,000'},
    {asset : 'Treasury Bonds', initiated : '10/06/2020', period_in_years : 0.25, growth : 21, amount : '10,000'},
    {asset : 'Fied Depost', initiated : '10/10/2021', period_in_years : 1, growth : 17, amount : '10,000'},
    {asset : 'Insurance',  initiated : '31/12/2021', period_in_years : 5, growth : 30, amount : '10,000'},
    {asset : 'Index Fund', initiated : '10/11/2021', period_in_years : 10, growth : 18.9, amount : '10,000'}
]

  const setSecurity = props.setSecurity;


  return (
    <div>
    <nav>
      <button onClick={() => setSecurity(null)}>Summary</button>
    </nav>
      <Slides securities = {my_securities}/>
    </div>
  )
}

export default Securities