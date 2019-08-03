import React from 'react'
import Header from './Header'
import NewGenre from './NewGenre'
import EditGenre from './EditGenre'
import Genres from './Genres'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

const Home = () => {
  return <h1>Home</h1>
}

function App () {
  return (
    <Router>
      <div>
        <Header/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/genres' exact component={Genres}/>
          <Route path='/genres/new' exact component={NewGenre}/>
          <Route path='/genres/:id' exact component={EditGenre}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App
