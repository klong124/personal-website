import React, {Component} from 'react'
import {Button, Grid, Menu} from 'semantic-ui-react'

class NavBar extends Component
{

  render()
  {
    const songs = "/songs", home = "/"

    const items = [
      {key: 'editorials', active: true, name: 'Editorials'},
      {key: 'review', name: 'Reviews'},
      {key: 'events', name: 'Upcoming Events'},
    ]

    return (

      <Menu inverted className="roundless">
        <a href={home}>
          <Button secondary>Home</Button>
        </a>
        <a href={songs}>
          <Button secondary>Songs</Button>
        </a>
      </Menu>

    )
  }
}

export default NavBar