import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './navbar.css';
// Components
import About from '../about/About'
import Contact from '../contact/Contact'
import ProjectMain from '../Projects/ProjectMain';


export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false, // keep track of whether the dropdown menu is open or not
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    // toggle the value of isMenuOpen
    this.setState((state) => ({ isMenuOpen: !state.isMenuOpen }));
  }

  render() {
    const { isMenuOpen } = this.state;

    return (
      <nav className="navbar">
        {window.innerWidth < 600 ? (
            <>
              <button className= "Toggle"onClick={this.toggleMenu}>Menu</button>
              {isMenuOpen && (
              <div className='SmallBar'>
               

                <ul className="nav-menu">
                  <li>
                  <a href="/" className="nav-links">Home</a>
                  </li>
                  <li>
                  <a href="/project" className="nav-links">Projects</a>
                  </li>
                  
                  <li>
                  <a href="/StockApi" className="nav-links">API example</a>
                  </li>
                  
                </ul> </div>
        )}
            </>
          ) : (
            // If the screen width is 800px or above, show the buttons horizontally
            <>
              <div className='BigBar'>
              <div className='name'>
              <a href="/" className="navbar-logo">james Hutchins</a>
              </div>
              <ul className="nav-menu">
                <li>
                <a href="/" >Home</a>
                </li>
                <li>
                <a href="/project" className="nav-links">Projects</a>
                </li>
                
                <li>
                  <a href="/StockApi" className="nav-links">API example</a>
                </li>
              </ul>
              </div>

            
            </>
          )}

      </nav>
       
      
    );
  }
}
/*
{/* <nav>
          
          {window.innerWidth < 400 ? (
            <>
              <button onClick={this.toggleMenu}>Menu</button>
              {isMenuOpen && (
                <ul>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link to="/project">Projects</Link>
                  </li>
                 
                </ul>
              )}
            </>
          ) : (
            // If the screen width is 800px or above, show the buttons horizontally
            <>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/project">Projects</Link>
            
            </>
          )}

          
       
        </nav> */

      