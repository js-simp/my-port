//Crypto investment Analytics

import React from 'react'
import axios from 'axios';

function Crypto(props) {
  function requestPaxful() {
    // axios({
    //   method: 'get',
    //   url: `http://localhost:5000/paxful`,
    //   withCredentials: true
    // })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });;

    //----------------opening new window and listening for messages from paxful----------

    let paxWindow = window.open(`http://localhost:5000/paxful/auth`, 'toolbar=false', 'menubar=false')
    window.onmessage = (event) => {
      console.log(`Received message: ${event.data}`);
      paxWindow.close()
      window.focus()
  } 
  }

  function requestCrypto() {
    return;
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