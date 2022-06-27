//Crypto investment Analytics

import React from 'react'
import axios from 'axios';

function Crypto(props) {
  function requestPaxful() {
    axios({
      method: 'get',
      url: 'http://localhost:5000/register',
      data: {
        username: props.user
      },
      withCredentials: true
    })
    .then(function (response) {
      console.log(response);
      alert(response.info.message)
    })
    .catch(function (error) {
      console.log(error);
    });;
  }

  return (
    <div>
      <div>Crypto</div>
        <button onClick={() => {requestPaxful()}}>Get my paxful info!</button>
    </div>
    
  )
}

export default Crypto