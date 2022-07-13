//Crypto investment Analytics

import React from 'react';
import axios from 'axios';

function Crypto(props) {
  function requestPaxful() {
    
    //----------------opening new window and listening for messages from paxful----------

    let paxWindow = window.open(`http://localhost:5000/paxful/auth`, 'toolbar=false', 'menubar=false')
    window.onmessage = (event) => {
      console.log(`Received message: ${event.data}`);
      paxWindow.close()
      window.focus()
  } 
  }
  // "

  async function requestCrypto() {
    axios({
      method: 'post',
      url: "http://localhost:5000/ethplorer",
      data:{
        address : '0xb29380ffc20696729b7ab8d093fa1e2ec14dfe2b'
      },
      withCredentials: true
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  return (
    <div>
      <div>Crypto</div>
        <div className = 'cryptoAssets'>
          <button onClick={() => {requestPaxful()}}>Add Paxful</button>
          <button onClick={() => {requestCrypto()}}>Add Crypto</button>
        </div>
    </div>
    
  )
}

export default Crypto