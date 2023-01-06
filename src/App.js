import React from 'react'
import './index.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Navbar from './components/navbar/navbar'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Footer from './components/Footer/Footer'
import ProjectMain from './components/Projects/ProjectMain'
import SEC from './components/SEC/SEC'
import StockApi from './components/StockData/StockApi'
import Middle from './Middle'

import './index.css'

const App = (props, state) => {
  

  return (
    <Router>
    
    <div>
    
     
      
    
      <Routes>
        <Route path="/" element={<Middle/>}/>
        <Route path="/project" element={<ProjectMain/>}/>
        <Route path="/SEC" element={<SEC/>}/>
        <Route path="/StockApi" element={<StockApi/>}/>
      </Routes>
      
      
     
      
      
      <Footer />
    </div>
    </Router>
   
  )
}

export default App
