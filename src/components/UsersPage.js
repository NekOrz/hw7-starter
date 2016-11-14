import React, { Component } from 'react';
import 'babel-polyfill';
import fetch from 'isomorphic-fetch';

function Produce(arr) {
  const list = [];
  arr.forEach((u, i) => {
    const str = `#/users/${i + 1}`;
    list.push(<li key={i}><a href={str}>User {i + 1}</a></li>);
  });
  return list;
}

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
    if (users === undefined) {
      return <div>Loading...</div>;
    }

    return (
      <div>Users
        {JSON.stringify(this.state.users)}
        <ul>
          {Produce(users)}
        </ul>
      </div>
    );
  }
}

export default UsersPage;
