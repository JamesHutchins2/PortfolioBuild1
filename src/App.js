import React from 'react'
import './index.css'

import Header from './components/Header/Header'
import Navbar from './components/navbar/navbar'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Footer from './components/Footer/Footer'


import './index.css'

const App = (props, state) => {
  

  return (
    
    <div>
    
      <Navbar/>
      
    
      <Header/>
      <About/>
      
      <Contact/>
     
      <Experience/>
      <div className="App">
      
      </div>
      
      <Footer />
    </div>
   
  )
}

export default App
