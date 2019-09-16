import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Error1 from './error/Error'
import Error2 from './error/Error'
export default class Lucky extends Component {
  render() {
    return (
      <div>
          <ul>
          <li><Link to={`/lucky/error`}>click Error</Link></li>
          <li><Link to={`/lucky/error2`}>click Error2</Link></li>
        </ul>
        {
          console.info(this.props)
        }
        <Switch>
          <Route exact path={`/lucky/error`} component={Error1}></Route>
          <Route exact path={`/lucky/error2`} component={Error2}></Route>
        </Switch>
      </div>
    )
  }
}
