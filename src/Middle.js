import React from 'react'
import './index.css'
import Header from './components/Header/Header'
import Navbar from './components/navbar/navbar'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Footer from './components/Footer/Footer'
import ProjectMain from './components/Projects/ProjectMain'
import App from './App'
import StockApi from './components/StockData/StockApi'
import './index.css'
import SEC from './components/SEC/SEC'

const Middle = (props, state) => {
  
  let Component
  switch(window.location.pathname){
    case '/':
      Component = App
      break
    case '/project':
      Component = ProjectMain
      break
    case '/StockApi':
      Component = StockApi
      break
    case '/SEC':
      Component = SEC
      break
    default:
        Component = App
  }
  return (
    
    <Component/>
  )
}

export default Middle
