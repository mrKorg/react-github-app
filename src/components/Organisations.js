import React, {Component} from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'

class Organisations extends Component {
  render () {
    const items = []
    _.map(this.props.organisations, (organisation, index) => {
      items.push(
        <li className={['organisation', organisation.avatar_url ? 'has-img' : ''].join(' ')}
          key={organisation.login + '-' + index}
        >
          {organisation.avatar_url ? (
            <img src={organisation.avatar_url} alt={organisation.login} className='organisation__img' />
          ) : null}
          <div className='organisation__info'>
            <h5 className='organisation__title'>
              {organisation.login}
            </h5>
            {organisation.description ? (
              <p className='organisation__description'>
                {organisation.description}
              </p>
            ) : null}
          </div>
        </li>
      )
    })

    return items.length ? (
      <div className='organisations'>
        <div className='organisations__title'>
          User organisations:
        </div>
        <ul className='organisations__list'>
          {items}
        </ul>
      </div>
    ) : null
  }
}

const mapStateToProps = ({organisations}) => ({
  organisations
})

export default connect(mapStateToProps)(Organisations)
