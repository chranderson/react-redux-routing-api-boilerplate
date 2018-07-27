import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { ColorFill } from '../../components'
import Fade from '@material-ui/core/es/Fade'

class Home extends Component {
  static defaultProps = {}
  static propTypes = {}

  state = {
    on: true
  }
  render() {
    return (
        <ColorFill onClick={() => this.setState({on: !this.state.on})}>
          <Fade in={this.state.on} timeout={300}>
            <span>Home</span>
          </Fade>
        </ColorFill>
    )
  }
}

export default Home
