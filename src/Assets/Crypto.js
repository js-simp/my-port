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
    // window features

    let paxWindow = window.open(`http://localhost:5000/${props.user}/paxful/auth`, 'toolbar=false', 'menubar=false')
    window.onmessage = (event) => {
      console.log(`Received message: ${event.data}`);
      paxWindow.close()
      window.focus()
  } 
  }

  return (
    <div>
      <div>Crypto</div>
        <button onClick={() => {requestPaxful()}}>Get my paxful info!</button>
    </div>
    
  )
}

export default Crypto