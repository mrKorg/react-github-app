import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchRepositories, fetchOrganisations} from '../actions'
import _ from 'lodash'

class Search extends Component {
  state = {
    searchValue: '',
    searchTimeout: null,
    searchTimeoutInterval: 500
  };

  onInputChange = () => event => {
    this.state.searchValue = _.trim(event.target.value.toLowerCase())

    if (this.state.searchTimeout) {
      clearInterval(this.state.searchTimeout)
    }

    this.state.searchTimeout = setTimeout(() => {
      this.props.fetchRepositories(this.state.searchValue)
      this.props.fetchOrganisations(this.state.searchValue)
    }, this.state.searchTimeoutInterval)
  };

  render () {
    return (
      <div className='search'>
        <input
          className='search__input'
          placeholder='Enter username'
          onChange={this.onInputChange()}
          type='text'
        />
      </div>
    )
  }
}

const mapStateToProps = ({repositories}) => ({
  repositories
})

export default connect(mapStateToProps, {fetchRepositories, fetchOrganisations})(Search)
