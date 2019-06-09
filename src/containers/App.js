import React, {Component} from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Repositories from '../components/Repositories'
import Users from '../components/Users'

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <section className='grid'>
          <div className='grid__aside'>
            <Search />
            <Users />
          </div>
          <div className='grid__main'>
            <Repositories />
          </div>
        </section>
        <footer className='footer'>
          <p>
            Copyright 2019. Requestum company
          </p>
        </footer>
      </div>
    )
  }
}

export default App
