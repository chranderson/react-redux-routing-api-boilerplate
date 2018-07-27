import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  Link
} from 'react-router-dom'

/* remove this when ready to rock */
const Nav = styled.nav`
  height: 100vh;
  background: rgba(0,0,0,0.5);
`


class Navigation extends Component {
  static defaultProps = {}
  static propTypes = {}

  render() {
    return (
      <Nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/clients'>Clients</Link></li>
          <li><Link to='/users'>Users</Link></li>
        </ul>
      </Nav>
    )
  }
}

export default Navigation
