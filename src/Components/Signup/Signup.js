import React,{useState,useContext} from 'react';
 
import {useHistory} from'react-router-dom'
import Logo from '../../olx-logo.png';
import './Signup.css';
import { FirebaseContext } from '../../store/Context';

export default function Signup() {
  const history=useHistory()
  const[userName,setUserName]=useState('')
  const[email,setUserEmail]=useState('')
  const[phone,setUserPhone]=useState('')
  const[password,setUserpassword]=useState('')
  const {firebase}=useContext(FirebaseContext)

  const handleSumbit=(event)=>{
    event.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(email, password).then((result)=>{
      result.user.updateProfile({displayName:userName}).then(()=>firebase.firestore().collection('users')
      .add({
        id:result.user.uid,
        username:userName,
        phone:phone
      }).then(()=>{
        history.push("/login")

      }) )
    })

  }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSumbit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            value={userName}
            onChange={(e)=>setUserName(e.target.value)}
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={email}
            onChange={(e)=>setUserEmail(e.target.value)}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            value={phone}
            onChange={(e)=>setUserPhone(e.target.value)}
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={(e)=>setUserpassword(e.target.value)}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
