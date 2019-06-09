import React, {Component} from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'

class Users extends Component {
  state = {
    maxUsersLength: 15
  };

  render () {
    const items = []
    _.map(_.slice(this.props.users, 0, this.state.maxUsersLength), (user, index) => {
      items.push(
        <li className={['user', 'is-' + user.status].join(' ')}
          key={user.nickName + '-' + index}
        >
          <h4 className='user__title'>
            {user.nickName}
          </h4>
        </li>
      )
    })

    return items.length ? (
      <div className={['users', this.props.users.length >= this.state.maxUsersLength ? 'is-fill' : ''].join(' ')}>
        <div className='users__title'>
          Search history:
        </div>
        <ul className='users__list'>
          {items}
        </ul>
      </div>
    ) : null
  }
}

const mapStateToProps = ({users}) => ({
  users
})

export default connect(mapStateToProps)(Users)
