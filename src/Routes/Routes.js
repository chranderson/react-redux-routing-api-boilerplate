import React from 'react'
// import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import { Clients, Home, Users } from '../containers'

/* this pattern gives us a location object with a unique key, so Switch updates on all route changes */
const Routes = () => (
  <Route render={({ location }) => (
    <Switch location={location}>
       <Route exact path="/" component={Home} />
       <Route exact path="/clients" component={Clients} />
       <Route exact path="/users" component={Users} />
       <Route render={() => <div>Not Found</div>} />
    </Switch>
  )} />
)


Routes.defaultProps = {}

Routes.propTypes = {}

Routes.displayName = Routes

export default Routes
