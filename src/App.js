import React,{useEffect,useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import Home from './Components/Home'
import Signup from './Components/Signup' 
import Hello from './Components/Hello'
import Login from './Components/Login'
import Donor from './Components/Donor'
import Receiver from './Components/Receiver'
import { auth } from './Components/Firebase'

const App = () => {
  const [presentUser,setPresentUser]=useState(null);
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(user){
      setPresentUser({
        uid:user.uid,
        email:user.email
      })
    }
    else{
        setPresentUser(null);
    }
  })
  },[])
  return (
    <div>
      <Router>
        <Routes>
        <Route path='/' element={<Hello/>}/>
        <Route  path='/signup' element={<Signup/>}/>
        <Route  path='/login' element={<Login/>}/>
        <Route  path='/donor' element={<Donor presentUser={presentUser} />}/> 
        <Route  path='/receiver' element={<Receiver presentUser={presentUser} />}/> 
        <Route path='/home' element={presentUser ? (<Home presentUser={presentUser}/>) : <Login/> }/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
