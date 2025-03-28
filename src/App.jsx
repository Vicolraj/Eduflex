import { useState } from 'react'
import Header from './Components/Header.jsx'
import './App.css'
import HomePage from './Components/Body.jsx'
import Signinup from './Components/SignInSignUp.jsx'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <main className='component-container'>
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/home" element = {<Home/>} />
        <Route path = "/:action/:user" element = {<Signinup />}/> 
      </Routes>
    </main>
  )
}

export default App


const Home = () => {
  return(
    <>
    <Header />
    <HomePage />
    </>
  )
}

