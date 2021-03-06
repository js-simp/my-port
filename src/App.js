import './App.css';
import Summary from './Summary';
import Securities from './Assets/Securities';
import RealEstate from './Assets/RealEstate.js'
import Authentication from './Components/Authentication'
import {useState} from 'react';

function App() {
  const data = [
    { asset : 'RE', amount : 2000000, growth : 25.6 },
    {asset : 'BI', amount : 1500000, growth:10.9},
    {asset :'Bul', amount: 500000, growth : 40.4},
    {asset:'CR', amount : 500000, growth : -33.5},
    {asset:'CRY', amount : 900000, growth : -22.7 },
    {asset:'SE', amount : 300000, growth : 21.0}
  ];

  const [asset, setAsset] = useState(null);
  const [auth, setAuth] = useState(false);

  if(auth){
    return (
      <div>
        {
          asset === null ?
          <div className = 'Summary'>
          <Summary data = {data} setSecurity = {setAsset}/>
          </div>
          : asset === 'SE' ?
            <Securities setSecurity = {setAsset}/> 
          : asset === 'RE' ?
            <RealEstate setRealEstate = {setAsset}/>  
          : null  
        }
      </div>
      
    );
  }
  else{
    return (
      <Authentication logInStatus = {setAuth}/>
    )
  }
  
    }

export default App;
