import React, { Component } from 'react';
import 'babel-polyfill';
import fetch from 'isomorphic-fetch';

function User(props) {
  return <li>{props.name}</li>;
}
User.propTypes = {
  name: React.PropTypes.string,
};

class UsersPage extends Component {
  state = {
    users: {},
  };
  componentDidMount() {
    // fetch `/api/users` to get users and then set state...
    fetch('/api/users')
      .then(res => res.json())
      .then(json => {
        this.setState({
          users: json
        });
      });
  }
  render() {
    const users = this.state.users.users;
    if (JSON.stringify(users) === '{}') {
      return (
        <div>Loading...</div>
      );
    }
/*
    const html = [
      <div>Users</div>,
      <div>{JSON.stringify(this.state.users)}</div>,
      <li>Loading...</li>
    ];

    html[2].children
*/
    return (
      <div>Users
        {JSON.stringify(this.state.users)}
        <ul>
          <li><a href="#/users/1">User 1</a></li>
          <li><a href="#/users/2">User 2</a></li>
        </ul>
      </div>
    );
    // <li>
    //   {
    //     users.map(user => <User key={user.name} name={user.name} />)
    //   }
    // </li>
    // <div>Users
    //   {JSON.stringify(this.state.users)}
    // </div>
  }
}

export default UsersPage;
