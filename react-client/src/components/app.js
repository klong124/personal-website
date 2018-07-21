import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {browserHistory} from 'react-router'

/* NavBar */
import NavBar from './headerComponent/navBar.js'


/* Footer */
import Footer from './footerComponent/footer.js'


/* Pages */
import HomePage from './pages/homePage.js'
import Songs from './pages/songs.js'


class App extends Component
{
  render()
  {
    return (
      <Router>
        <div>
          <NavBar/>
          <Route name="home" exact path="/" component={HomePage}/>
          <Route name="home" exact path="/songs" component={Songs}/>
          <Footer/>
        </div>
      </Router>
    )
  }
}

export default App