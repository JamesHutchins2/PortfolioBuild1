import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Components
import About from '../about/About'
import Contact from '../contact/Contact'


export default class Navelems extends React.Component {
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
      <Router>
        <nav>
          {/* If the screen width is below 800px, show the dropdown menu */}
          {window.innerWidth < 800 ? (
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
                 
                </ul>
              )}
            </>
          ) : (
            // If the screen width is 800px or above, show the buttons horizontally
            <>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            
            </>
          )}

          {/* Use React Router to render the appropriate component when the button is clicked */}
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          
        </nav>
      </Router>
    );
  }
}
