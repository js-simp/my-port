import React, {useState} from 'react'
import axios from 'axios'
import './Authentication.css'


function Authentication(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newUser, setNewUser] = useState('');
  const [newPass, setNewPass] = useState('');

  function submitInfo(flag) {
    if(flag === 'login'){
      console.log(username, password)
      axios({
        method: 'post',
        url: 'http://localhost:5000/login/',
        data: {
          username: username,
          password: password
        },
        withCredentials: true
      })
        .then(function (response) {
          console.log(response)
          alert(response.data.message)
          //set logInStatus hook in App.js to true and render Summary page
          if(response.data.success){
            props.logInStatus(true)
            props.setUser(username)
          }
        });
    }
    else {
      console.log(newUser, newPass)
      axios({
        method: 'post',
        url: 'http://localhost:5000/register',
        data: {
          username: newUser,
          password: newPass
        },
        withCredentials: true
      })
      .then(function (response) {
        console.log(response);
        alert(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });;
    }
  }
  return (
    <div className = 'Authentication'>
      <div className = 'Login'>
        <h1>Login</h1>
        <input placeholder = "username" onChange = {(e) => setUsername(e.target.value)}/>
        <input placeholder = "password" onChange = {(e) => setPassword(e.target.value)}/>
        <button className = "Login" onClick = {() => submitInfo('login')}>Sign In</button>
      </div>
      <div className = 'Registration'>
        <h1>Register</h1>
        <input placeholder = "username" onChange = {(e) => setNewUser(e.target.value)}/>
        <input placeholder = "password" onChange = {(e) => setNewPass(e.target.value)}/>
        <button className = 'Register' onClick = {() => submitInfo('register')}>Register </button>
      </div>
    </div>
  )
}

export default Authentication
