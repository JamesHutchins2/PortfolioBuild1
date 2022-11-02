import React from 'react'
import './index.css'
import Header from './components/Header/Header'
import Navbar from './components/navbar/navbar'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import './index.css'
const App = (props, state) => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <About/>
      <contact/>
      <Experience/>

    </div>
  )
}

export default App
