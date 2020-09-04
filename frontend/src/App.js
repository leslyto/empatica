import React, { useState } from 'react'
import { Switch, Route } from "react-router-dom";
import Orders from './Orders'
import Home from './Home'
import Login from './Login'
import './App.scss'

const App = () => {
  const [ authenticatedUserId, setAuthenticatedUserId ] = useState(null)

  return (
    <div className='App'>
      <Switch>
        <Route component={Home} exact path="/"/>
        <Route 
          path="/login"
          render={(props) => <Login {...props} setAuthenticatedUserId={setAuthenticatedUserId} />}/>
        <Route 
          path="/orders"
          render={(props) => <Orders {...props} setAuthenticatedUserId={setAuthenticatedUserId} authenticatedUserId={authenticatedUserId} /> }/>
      </Switch>
    </div>
  )
}

export default App
