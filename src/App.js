import React, { Component } from 'react'
import {Home} from 'pages/home'
import {Search} from 'components/common/search'
import {Location} from 'components/common/location'
import Exercise from 'components/common/exercise/exercise'
import {Detail} from 'pages/detail'
import {List} from 'pages/list'
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <Switch>
            <Redirect from='/' exact to='/home'></Redirect>
            <Route path="/home" component={Home}></Route>
            <Route path="/search" component={Search}></Route>
            <Route path="/location" component={Location}></Route>
            <Route path="/detail" component={Detail}></Route>
            <Route path="/exercise" component={Exercise}></Route>
            <Route path='/list/:address' component={List}></Route>
      </Switch>
    );
  }
}

export default App;
