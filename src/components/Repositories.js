import React, {Component} from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'

class Repositories extends Component {
  render () {
    const items = []
    _.map(this.props.repositories, repository => {
      items.push(
        <div className='repository'
          key={repository.id}
          onClick={() => window.open(repository.html_url, '_blank')}
        >
          <h2 className='repository__title'>
            {repository.name}
          </h2>
          <div className='repository__info'>
            <div>
              <p>
                Language: <strong>{repository.language ? repository.language : 'Unknown'}</strong>
              </p>
            </div>
            <div>
              <p>Description: <strong>{repository.description ? repository.description : 'None'}</strong></p>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className='repositories'>
        <div className='repositories__list'>
          {items}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({repositories}) => ({
  repositories
})

export default connect(mapStateToProps)(Repositories)
