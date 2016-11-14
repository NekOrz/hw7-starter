import React, { Component, PropTypes } from 'react';


class SingleUserPage extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  };
  state = {
    userData: {},
  };

  componentDidMount() {
    // fetch `/api/users/${id}` to get user and then set state...
    fetch(`/api/users/${this.props.id}`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          userData: json
        });
      })
      .catch(rej => console.log(rej));
  }

  render() {
    return (
      <div>
        User {this.props.id}
        <ul>
          <li>Name: {this.state.userData.name}</li>
          <li>Age: {this.state.userData.age}</li>
        </ul>
      </div>
    );
  }
}

export default SingleUserPage;
